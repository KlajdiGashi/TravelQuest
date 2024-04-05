from django.db import models

# Create your models here.

class User(models.Model):
    _id = models.AutoField(primary_key=True, editable=False)
    username = models.CharField(max_length=24)
    password = models.CharField(max_length=256)
    salt = models.CharField(max_length=256)
    fullname = models.CharField(max_length=128)
    number = models.CharField(max_length=128)
    role = models.CharField(max_length=24)
    location = models.CharField(max_length=128)
    
    def __str__(self):
        return self.fullname


    