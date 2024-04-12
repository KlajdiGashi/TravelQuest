from rest_framework import serializers
from .models import User
from rest_framework.validators import UniqueValidator
from django.contrib.auth.password_validation import validate_password

class RegisterSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ['_id', 'username', 'fullname', 'number', 'role', 'location']

class LoginSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ['username', 'fullname', 'number', 'role', 'location']
        extra_kwargs = {
            'password': {'write_only': True},
        }

    def validate(self, data):
        username = data.get('username')
        password = data.get('password')

        if not username:
            raise serializers.ValidationError('Username is required')

        user = User.objects.filter(username=username).first()
        if not user:
            raise serializers.ValidationError('User not found')

        if not password:
            raise serializers.ValidationError('Password is required')

        if not user.check_password(password):
            raise serializers.ValidationError('Incorrect password')

        return data