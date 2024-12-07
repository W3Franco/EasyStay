# Imports
from django.db import models

# Variables for the places
class stay(models.Model):
    name = models.CharField(max_length=100, default="", unique=False)
    location = models.CharField(max_length=200, default="", unique=False)
    description = models.CharField(max_length=1000, default="", unique=False)
    available = models.BooleanField(null=False, default=False)
    created_at = models.DateTimeField(auto_now_add=True)
