from django.db import models
import uuid
from .bookings import Booking

class Payment(models.Model):
    paymentid = models.UUIDField(primary_key=True, default=uuid.uuid4, editable=False)
    paymentType = models.CharField(max_length=50)  #'credit card', 'paypal', etc.
    booking = models.ForeignKey(Booking, on_delete=models.CASCADE)
    active = models.BooleanField(default=True)

    def str(self):
        return f"Payment {self.paymentid} for Booking {self.booking} with Type {self.paymentType}"