from rest_framework import serializers
from .models import User, Payment, Booking, Transaction, Ticket, Vendor
from rest_framework.validators import UniqueValidator
from django.contrib.auth.password_validation import validate_password


class PaymentSerializer(serializers.ModelSerializer):
    class Meta:
        model = Payment
        fields = ['id', 'type', 'details']


class RegisterSerializer(serializers.ModelSerializer):
    payments = PaymentSerializer(many=True, read_only=True)

    class Meta:
        model = User
        fields = ['_id', 'username', 'fullname', 'number', 'role', 'location', 'payments']


class LoginSerializer(serializers.ModelSerializer):
    payments = PaymentSerializer(many=True, read_only=True)

    class Meta:
        model = User
        fields = ['username', 'fullname', 'number', 'role', 'location', 'payments']
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

class UserSerializer(serializers.ModelSerializer):
    payments = PaymentSerializer(many=True, read_only=True)

    class Meta:
        model = User
        fields = ['_id', 'username', 'fullname', 'number', 'role', 'location', 'payments']

class VendorSerializer(serializers.ModelSerializer):
    class Meta:
        model = Vendor
        fields = ['id', 'vendor_name']

class TicketSerializer(serializers.ModelSerializer):
    vendor = VendorSerializer(read_only=True)

    class Meta:
        model = Ticket
        fields = ['id', 'vendor', 'from_location', 'to_location', 'start_time', 'end_time', 'price', 'type', 'seat']

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
