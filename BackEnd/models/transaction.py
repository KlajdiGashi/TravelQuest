from django.db import models
import uuid
from .payment import Payment
from .bookings import Booking

class Transaction(models.Model):
    payment = models.ForeignKey(Payment, on_delete=models.CASCADE)
    booking = models.ForeignKey(Booking, on_delete=models.CASCADE)
    active = models.BooleanField(default=True)

    def __str__(self):
        return f'Transaction for {self.booking} with {self.payment}'