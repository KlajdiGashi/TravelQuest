from django.shortcuts import render
from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework import status
from rest_framework.status import HTTP_201_CREATED, HTTP_400_BAD_REQUEST, HTTP_200_OK, HTTP_404_NOT_FOUND, HTTP_204_NO_CONTENT
from .serializers import RegisterSerializer, LoginSerializer, TicketSerializer, VendorSerializer,TransactionSerializer, PaymentSerializer
from .models import Ticket, User, Vendor, Transaction, Payment
import json

@api_view(['POST', 'GET', 'PUT', 'DELETE'])
def user(request):
    if request.method == 'POST': # register
        serializer = RegisterSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=HTTP_201_CREATED)
        return Response(serializer.errors, status=HTTP_400_BAD_REQUEST)
    
    elif request.method == 'GET': # login
        serializer = LoginSerializer(data=request.query_params)
        if serializer.is_valid():
            user = serializer.validated_data['user']
            user_data = {
                'username': user.username,
                'fullname': user.fullname,
                'number': user.number,
                'role': user.role,
                'guid': user.guid
            }
            return Response(json.dumps(user_data), status=HTTP_200_OK)
        
        return Response(serializer.errors, status=HTTP_400_BAD_REQUEST)
    elif request.method == 'PUT':
        user_id = request.query_params.get('id')
        try:
            user = User.objects.get(id=user_id)
        except User.DoesNotExist:
            return Response({"error": "User not found."}, status=HTTP_404_NOT_FOUND)

        serializer = RegisterSerializer(user, data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=HTTP_200_OK)
        return Response(serializer.errors, status=HTTP_400_BAD_REQUEST)
    elif request.method == 'DELETE':
        user_id = request.query_params.get('id')
        try:
            user = User.objects.get(id=user_id)
        except User.DoesNotExist:
            return Response({"error": "User not found."}, status=HTTP_404_NOT_FOUND)

        user.delete()
        return Response( {'message': 'User deleted successfully.'}, status=HTTP_204_NO_CONTENT)
    
    return Response({'error': 'Invalid request method'}, status=HTTP_400_BAD_REQUEST)

@api_view(['GET', 'POST', 'PUT', 'DELETE'])
def ticket(request):
    if request.method == 'GET':
        ticket_id = request.query_params.get('id')
        if ticket_id:
            try:
                ticket = Ticket.objects.get(id=ticket_id)
                serializer = TicketSerializer(ticket)
                return Response(serializer.data, status=HTTP_200_OK)
            except Ticket.DoesNotExist:
                return Response({"error": "Ticket not found."}, status=HTTP_404_NOT_FOUND)
        else:
            tickets = Ticket.objects.all()
            serializer = TicketSerializer(tickets, many=True)
            return Response(serializer.data, status=HTTP_200_OK)
   
    elif request.method == 'POST':
        serializer = TicketSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=HTTP_201_CREATED)
        return Response(serializer.errors, status=HTTP_400_BAD_REQUEST)
   
    elif request.method == 'PUT':
        ticket_id = request.query_params.get('id')
        try:
            ticket = Ticket.objects.get(id=ticket_id)
        except Ticket.DoesNotExist:
            return Response({"error": "Ticket not found."}, status=HTTP_404_NOT_FOUND)

        serializer = TicketSerializer(ticket, data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=HTTP_200_OK)
        return Response(serializer.errors, status=HTTP_400_BAD_REQUEST)
   
    elif request.method == 'DELETE':
        ticket_id = request.query_params.get('id')
        try:
            ticket = Ticket.objects.get(id=ticket_id)
        except Ticket.DoesNotExist:
            return Response({"error": "Ticket not found."}, status=HTTP_404_NOT_FOUND)

        ticket.delete()
        return Response( {'message': 'Ticket deleted successfully.'}, status=HTTP_204_NO_CONTENT)

@api_view(['GET', 'POST'])
def vendor(request, vendor_id=None):
    if request.method == 'GET':
        if vendor_id:
            try:
                vendor = Vendor.objects.get(id=vendor_id)
                serializer = VendorSerializer(vendor)
                return Response(serializer.data)
            except Vendor.DoesNotExist:
                return Response({"error": "Vendor not found."}, status=HTTP_400_BAD_REQUEST)
        else:
            vendors = Vendor.objects.all()
            serializer = VendorSerializer(vendors, many=True)
            return Response(serializer.data)
    
    elif request.method == 'POST':
        serializer = VendorSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=HTTP_201_CREATED)
        return Response(serializer.errors, status=HTTP_400_BAD_REQUEST)
    

@api_view(['GET', 'POST'])
def transaction(request):
    if request.method == 'GET':
        transaction_id = request.query_params.get('id')
        if transaction_id:
            try:
                transaction = Transaction.objects.get(id=transaction_id)
                serializer = TransactionSerializer(transaction)
                return Response(serializer.data, status=HTTP_200_OK)
            except Transaction.DoesNotExist:
                return Response({"error": "Transaction not found."}, status=HTTP_400_BAD_REQUEST)
        else:
            transactions = Transaction.objects.all()
            serializer = TransactionSerializer(transactions, many=True)
            return Response(serializer.data, status=HTTP_200_OK)
    
    elif request.method == 'POST':
        serializer = TransactionSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=HTTP_201_CREATED)
        return Response(serializer.errors, status=HTTP_400_BAD_REQUEST)

@api_view(['GET', 'POST'])
def payment(request):
    if request.method == 'GET':
        payment_id = request.query_params.get('id')
        if payment_id:
            try:
                payment = Payment.objects.get(id=payment_id)
                serializer = PaymentSerializer(payment)
                return Response(serializer.data, status=status.HTTP_200_OK)
            except Payment.DoesNotExist:
                return Response({"error": "Payment not found."}, status=status.HTTP_404_NOT_FOUND)
        else:
            payments = Payment.objects.all()
            serializer = PaymentSerializer(payments, many=True)
            return Response(serializer.data, status=status.HTTP_200_OK)
    
    elif request.method == 'POST':
        user_id = request.data.get('user_id')
        try:
            user = User.objects.get(id=user_id)
        except User.DoesNotExist:
            return Response({"error": "User not found."}, status=status.HTTP_404_NOT_FOUND)

        data = request.data.copy()
        data['user'] = user.id

        serializer = PaymentSerializer(data=data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
    
    @api_view(['GET', 'DELETE'])
    def payment_detail(request, pk):
        try:
            payment = Payment.objects.get(pk=pk)
        except Payment.DoesNotExist:
            return Response({"error": "Payment not found."}, status=status.HTTP_404_NOT_FOUND)

        if request.method == 'GET':
            serializer = PaymentSerializer(payment)
            return Response(serializer.data, status=status.HTTP_200_OK)

        elif request.method == 'DELETE':
            try:
                payment.delete()
                return Response({"message": "Payment deleted successfully."}, status=status.HTTP_200_OK)
            except Exception as e:
                return Response({"error": str(e)}, status=status.HTTP_500_INTERNAL_SERVER_ERROR)
            
@api_view(['GET', 'POST'])
def vendor(request, vendor_id=None):
    if request.method == 'GET':
        if vendor_id:
            try:
                vendor = Vendor.objects.get(id=vendor_id)
                serializer = VendorSerializer(vendor)
                return Response(serializer.data)
            except Vendor.DoesNotExist:
                return Response({"error": "Vendor not found."}, status=HTTP_400_BAD_REQUEST)
        else:
            vendors = Vendor.objects.all()
            serializer = VendorSerializer(vendors, many=True)
            return Response(serializer.data)
    
    elif request.method == 'POST':
        serializer = VendorSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=HTTP_201_CREATED)
        return Response(serializer.errors, status=HTTP_400_BAD_REQUEST)