from django.shortcuts import render
from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework.status import HTTP_201_CREATED, HTTP_400_BAD_REQUEST, HTTP_200_OK
from .serializers import RegisterSerializer, LoginSerializer, TicketSerializer, VendorSerializer
from .models import Ticket, User, Vendor

@api_view(['POST', 'GET'])
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
                'location': user.location,
            }
            return Response(user_data, status=HTTP_200_OK)
        
        return Response(serializer.errors, status=HTTP_400_BAD_REQUEST)
    
    return Response({'error': 'Invalid request method'}, status=HTTP_400_BAD_REQUEST)

@api_view(['POST'])
def test_token(request):
    return Response({})

@api_view(['GET', 'POST'])
def ticket(request):
    if request.method == 'GET':
        ticket_id = request.query_params.get('id')
        if ticket_id:
            try:
                ticket = Ticket.objects.get(id=ticket_id)
                serializer = TicketSerializer(ticket)
                return Response(serializer.data, status=HTTP_200_OK)
            except Ticket.DoesNotExist:
                return Response({"error": "Ticket not found."}, status=HTTP_400_BAD_REQUEST)
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