from django.db import models
import uuid

class Vendor(models.Model):
    vendorname = models.CharField(max_length=255)

    def __str__(self):
        return self.vendorname