from django.db import models
import uuid

class Vendor(models.Model):
    vid = models.UUIDField(primary_key=True, default=uuid.uuid4, editable=False)
    vendorname = models.CharField(max_length=255)

    def __str__(self):
        return self.vendorname