# Imports
from django.shortcuts import render
from rest_framework import generics
from .serializer import StaySerializer
from .models import stay

# viewing dummies
class stayView(generics.ListAPIView):
    queryset = stay.objects.all()
    serializer_class = StaySerializer

# Creating dummies
class stayCreateView(generics.CreateAPIView):
    queryset = stay.objects.all()
    serializer_class = StaySerializer