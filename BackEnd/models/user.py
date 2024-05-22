from django.db import models
import uuid
import hashlib
import os

class User(models.Model):
    guid = models.UUIDField(primary_key=True, default=uuid.uuid4, editable=False)
    fullname = models.CharField(max_length=255)
    uname = models.CharField(max_length=150, unique=True)
    upass = models.CharField(max_length=255)  
    salt = models.CharField(max_length=16)
    uemail = models.EmailField(unique=True)
    unumber = models.CharField(max_length=15)  
    role = models.CharField(max_length=50) 

    def save(self, *args, **kwargs):
        if not self.id:  # If this is a new user
            self.salt = self.generate_salt()
            self.upass = self.hash_password(self.upass)
        super(User, self).save(*args, **kwargs)