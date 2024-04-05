from django.shortcuts import render
from django.http import JsonResponse
from rest_framework.decorators import api_view
from rest_framework.response import Response

# Create your views here.

@api_view(['POST'])
def login(request):
    return Response({"message": "Login request"})

@api_view(['POST'])
def signup(request):
    return Response({"message": "Signup request"})

@api_view(['POST'])
def test_token(request):
    return Response({})