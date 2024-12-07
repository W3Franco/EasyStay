# Imports
from rest_framework import serializers
from .models import stay

# To make the models into readable code
class StaySerializer(serializers.ModelSerializer):
    class Meta:
        model = stay
        fields = ('id', 'name', 'location', 'description', 'available', 'created_at')