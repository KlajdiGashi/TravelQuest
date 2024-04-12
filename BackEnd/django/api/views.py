from django.shortcuts import render
from django.http import JsonResponse
from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework.status import HTTP_201_CREATED, HTTP_400_BAD_REQUEST, HTTP_200_OK
from .serializers import RegisterSerializer, LoginSerializer

# Create your views here.

@api_view(['POST', 'GET'])
def users(request):
    if request.method == 'POST': # register
        serializer = RegisterSerializer(data = request.data)
        
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status = HTTP_201_CREATED)
        
        return Response(serializer.errors, status = HTTP_400_BAD_REQUEST)
    
    elif request.method == 'GET': #login
        serializer = LoginSerializer(data=request.query_params)
        
        if serializer.is_valid():
            user = serializer.validated_data
            
            # extra login logic
            return Response(user, status = HTTP_200_OK) # user from serializer doesn't include password
        
        return Response(serializer.errors, status = HTTP_400_BAD_REQUEST)
    
    return Response({'error': 'Invalid request method'}, status = HTTP_400_BAD_REQUEST)

@api_view(['POST'])
def test_token(request):
    return Response({})