from django.db import models
import uuid
from .vendor import Vendor

class Ticket(models.Model):
    from_location = models.CharField(max_length=128)
    to_location = models.CharField(max_length=128)
    startTime = models.DateTimeField()
    endTime = models.DateTimeField()
    price = models.DecimalField(max_digits=10, decimal_places=2)
    type = models.CharField(max_length=50)  # e.g., 'economy', 'business', etc.
    seat = models.CharField(max_length=10)  # e.g., '12A', '14C', etc.
    vendor_id = models.ForeignKey(Vendor, on_delete=models.CASCADE)
    image = models.ForeignKey(upload_to='ticket_images', null=True, blank=True)

    def __str__(self):
        return f"{self.from_location} to {self.to_location} on {self.seat}"