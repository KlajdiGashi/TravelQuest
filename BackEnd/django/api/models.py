from django.db import models
from django.contrib.auth.models import AbstractBaseUser, BaseUserManager
# models under here
# py ./BackEnd/django/manage.py makemigrations api
# py ./BackEnd/django/manage.py migrate
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
    _id = models.AutoField(primary_key=True, editable=False)
    username = models.CharField(max_length=24, unique=True)
    fullname = models.CharField(max_length=128)
    number = models.CharField(max_length=128)
    role = models.CharField(max_length=24)
    location = models.CharField(max_length=128)
    is_active = models.BooleanField(default=True)
    is_staff = models.BooleanField(default=False)

    objects = CustomUserManager()

    USERNAME_FIELD = 'username'
    REQUIRED_FIELDS = ['fullname', 'number', 'role', 'location']

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
    vendor = models.ForeignKey(Vendor, on_delete=models.CASCADE)
    from_location = models.CharField(max_length=128)
    to_location = models.CharField(max_length=128)
    start_time = models.DateTimeField()
    end_time = models.DateTimeField()
    price = models.DecimalField(max_digits=10, decimal_places=2)
    type = models.CharField(max_length=50)
    seat = models.CharField(max_length=10)

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
