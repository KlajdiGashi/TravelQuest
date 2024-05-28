from django.db import models
import uuid
from .user import User
from .vendor import Vendor

class Booking(models.Model):
    bid = models.UUIDField(primary_key=True, default=uuid.uuid4, editable=False)
    guid = models.ForeignKey(User, on_delete=models.CASCADE)
    tvendorid = models.ForeignKey(Vendor, on_delete=models.CASCADE)
    seat = models.CharField(max_length=10) 

    def __str__(self):
        return f"Booking {self.bid} for User {self.guid} with Vendor {self.tvendorid}"