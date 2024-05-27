from django.db import models
from django.contrib.auth.models import AbstractBaseUser, BaseUserManager
from PIL import Image  # Make sure Pillow is installed
import uuid

# models under here
# py ./BackEnd/django/manage.py makemigrations api
# py ./BackEnd/django/manage.py migrate
# py ./BackEnd/django/manage.py runserver 8000 
class CustomUserManager(BaseUserManager):
    def create_user(self, username, password=None, **extra_fields):
        if not username:
            raise ValueError('The Username field must be set')
        user = self.model(username=username, **extra_fields)
        user.set_password(password)
        user.save(using=self._db)
        return user

    def create_superuser(self, username, password=None, **extra_fields):
        extra_fields.setdefault('is_staff', True)
        extra_fields.setdefault('is_superuser', True)
        return self.create_user(username, password, **extra_fields)

class User(AbstractBaseUser):
    guid = models.UUIDField(primary_key=True, default=uuid.uuid4, editable=False)
    fullname = models.CharField(max_length=255)
    username = models.CharField(max_length=150, unique=True)
    password = models.CharField(max_length=255)  
    email = models.EmailField(default='test@gmail.com')
    number = models.CharField(max_length=15) 
    role = models.CharField(max_length=50, default = 'customer')
    is_active = models.BooleanField(default=True)

    objects = CustomUserManager()

    USERNAME_FIELD = 'username'
    REQUIRED_FIELDS = ['fullname', 'number', 'role']

    def __str__(self):
        return self.fullname

    # Method to get all payments related to the user
    @property
    def payments(self):
        return self.payment_set.all()

class Payment(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE, related_name='payment_set')
    type = models.CharField(max_length=50)
    details = models.TextField()

    def __str__(self):
        return f'{self.type} - {self.details[:20]}'

class Vendor(models.Model):
    vendor_name = models.CharField(max_length=128)

    def __str__(self):
        return self.vendor_name

class Ticket(models.Model):
    from_location = models.CharField(max_length=128)
    to_location = models.CharField(max_length=128)
    start_time = models.DateTimeField()
    end_time = models.DateTimeField()
    price = models.DecimalField(max_digits=10, decimal_places=2)
    type = models.CharField(max_length=50)
    seat = models.CharField(max_length=10)
    vendor_id = models.ForeignKey(Vendor, on_delete=models.CASCADE)
    image = models.ImageField(upload_to='ticket_images/', null=True, blank=True)  # New image field

    def __str__(self):
        return f'Ticket from {self.from_location} to {self.to_location} - {self.seat}'
class Booking(models.Model):
    ticket = models.ForeignKey(Ticket, on_delete=models.CASCADE)
    seat = models.CharField(max_length=10)

    def __str__(self):
        return f'Booking for {self.seat} on {self.ticket}'

class Transaction(models.Model):
    payment = models.ForeignKey(Payment, on_delete=models.CASCADE)
    booking = models.ForeignKey(Booking, on_delete=models.CASCADE)
    active = models.BooleanField(default=True)

    def __str__(self):
        return f'Transaction for {self.booking} with {self.payment}'
