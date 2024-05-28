from rest_framework import serializers
from django.contrib.auth.models import User
from rest_framework.validators import UniqueValidator
from django.contrib.auth.password_validation import validate_password
import bcrypt
import base64

class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = '__all__'
        
class RegisterSerializer(serializers.ModelSerializer):
    user = serializers.CharField(
        required=True,
        validators=[UniqueValidator(queryset=User.objects.all())]
    )

    password = serializers.CharField(write_only=True, required=True, validators=[validate_password])
    confirmPassword = serializers.CharField(write_only=True, required=True)
    salt = serializers.CharField(write_only=True, required=True)

    class Meta:
        model = User
        fields = ('username', 'password', 'salt', 'fullname', 'number', 'location')
        
    def generateSalt(self):
        return base64.b64encode(bcrypt.gensalt()).decode('utf-8')

    def hashPassword(self, password, salt):
        hashed_password = bcrypt.hashpw(password.encode('utf-8'), salt)
        return base64.b64encode(hashed_password).decode('utf-8')
    def validate(self, attrs):
        if attrs['password'] != attrs['confirmPassword']:
            raise serializers.ValidationError({"password": "Password fields didn't match."})

        return attrs

    def create(self, validated_data):
        del validated_data['password2']
        user = User.objects.create(**validated_data)

        user.set_password(validated_data['password'])
        user.save()

        return user