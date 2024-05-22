from django.db import models
import uuid
from .vendor import Vendor

class Ticket(models.Model):
    tid = models.UUIDField(primary_key=True, default=uuid.uuid4, editable=False)
    tfrom = models.CharField(max_length=255)
    tend = models.CharField(max_length=255)
    startTime = models.DateTimeField()
    endTime = models.DateTimeField()
    tprice = models.DecimalField(max_digits=10, decimal_places=2)
    tvendorid = models.ForeignKey(Vendor, on_delete=models.CASCADE)
    type = models.CharField(max_length=50)  # e.g., 'economy', 'business', etc.
    tseat = models.CharField(max_length=10)  # e.g., '12A', '14C', etc.

   def str(self):
        return f"{self.tfrom} to {self.tend} on {self.startTime}