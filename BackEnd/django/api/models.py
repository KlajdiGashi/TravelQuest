from django.db import models
from django.contrib.auth.models import AbstractBaseUser, BaseUserManager

# Create your models here.

class CustomUserManager(BaseUserManager):
    def create_user(self, username, password=None, **extra_fields):
        """
        Create and return a regular user with the given username and password.
        """
        if not username:
            raise ValueError('The Username field must be set')
        user = self.model(username=username, **extra_fields)
        user.set_password(password)  # Hash the password before saving
        user.save(using=self._db)
        return user

    def create_superuser(self, username, password=None, **extra_fields):
        """
        Create and return a superuser with the given username and password.
        """
        extra_fields.setdefault('is_staff', True)
        extra_fields.setdefault('is_superuser', True)
        return self.create_user(username, password, **extra_fields)

class User(AbstractBaseUser):
    _id = models.AutoField(primary_key=True, editable=False)
    username = models.CharField(max_length=24, unique=True)  # Ensure uniqueness
    fullname = models.CharField(max_length=128)
    number = models.CharField(max_length=128)
    role = models.CharField(max_length=24)
    location = models.CharField(max_length=128)
    
    # Required fields for Django's authentication system
    is_active = models.BooleanField(default=True)
    is_staff = models.BooleanField(default=False)

    # Use CustomUserManager to manage user creation
    objects = CustomUserManager()

    USERNAME_FIELD = 'username'  # Use username as the unique identifier
    REQUIRED_FIELDS = ['fullname', 'number', 'role', 'location']  # Other required fields for create_user()

    def __str__(self):
        return self.fullname

    