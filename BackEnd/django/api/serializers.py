from rest_framework import serializers
from .models import User, Payment, Booking, Transaction, Ticket, Vendor
from rest_framework.validators import UniqueValidator
from django.contrib.auth import authenticate
from django.contrib.auth.password_validation import validate_password
from django.contrib.auth.hashers import check_password


class PaymentSerializer(serializers.ModelSerializer):
    class Meta:
        model = Payment
        fields = ['id', 'type', 'details']


from rest_framework import serializers
from .models import User, Payment

class PaymentSerializer(serializers.ModelSerializer):
    class Meta:
        model = Payment
        fields = ['id', 'type', 'details']

class RegisterSerializer(serializers.ModelSerializer):
    password = serializers.CharField(write_only=True, required=True, validators=[validate_password])
    confirm_password = serializers.CharField(write_only=True, required=True)
    
    class Meta:
        model = User
        fields = ['username', 'fullname', 'email', 'password', 'confirm_password', 'guid']
        read_only_fields = ('guid',)

    def validate(self, attrs):
        if attrs['password'] != attrs['confirm_password']:
            raise serializers.ValidationError({"password": "Password fields didn't match."})
        return attrs

    def create(self, validated_data):
        validated_data.pop('confirm_password')
        user = User.objects.create_user(**validated_data)
        return user

class LoginSerializer(serializers.Serializer):
    username = serializers.CharField()
    password = serializers.CharField(style={'input_type': 'password'}, trim_whitespace=False)

    def validate(self, attrs):
        username = attrs.get('username')
        password = attrs.get('password')

        if username and password:
            user = User.objects.filter(username=username).first()
            if user:
                if check_password(password, user.password):
                    attrs['user'] = user
                    return attrs
                else:
                    msg = 'Unable to log in with provided credentials.'
                    raise serializers.ValidationError(msg, code='authorization')
            else:
                msg = 'User with this username does not exist.'
                raise serializers.ValidationError(msg, code='authorization')
        else:
            msg = 'Must include "username" and "password".'
            raise serializers.ValidationError(msg, code='authorization')

class UserSerializer(serializers.ModelSerializer):
    payments = PaymentSerializer(many=True, read_only=True)

    class Meta:
        model = User
        fields = ['guid', 'username', 'fullname', 'number', 'role', 'payments']

class VendorSerializer(serializers.ModelSerializer):
    class Meta:
        model = Vendor
        fields = ['id', 'vendor_name']

class TicketSerializer(serializers.ModelSerializer):
    vendor_id = serializers.PrimaryKeyRelatedField(queryset=Vendor.objects.all())

    class Meta:
        model = Ticket
        fields = ['id', 'from_location', 'to_location', 'start_time', 'end_time', 'price', 'type', 'seat', 'vendor_id', 'image']
class BookingSerializer(serializers.ModelSerializer):
    ticket = TicketSerializer(read_only=True)

    class Meta:
        model = Booking
        fields = ['id', 'ticket', 'seat']

class TransactionSerializer(serializers.ModelSerializer):
    payment = PaymentSerializer(read_only=True)
    booking = BookingSerializer(read_only=True)

    class Meta:
        model = Transaction
        fields = ['id', 'payment', 'booking', 'active']