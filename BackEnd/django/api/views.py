from django.shortcuts import render
from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework.status import HTTP_201_CREATED, HTTP_400_BAD_REQUEST, HTTP_200_OK, HTTP_204_NO_CONTENT, HTTP_404_NOT_FOUND, HTTP_401_UNAUTHORIZED
from .serializers import RegisterSerializer, LoginSerializer, TicketSerializer, VendorSerializer
from .models import Ticket, User, Vendor

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
            }
            return Response(user_data, status=HTTP_200_OK)
        
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