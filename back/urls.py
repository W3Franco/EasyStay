# Imports
from django.contrib import admin
from django.urls import include, path
from .views import stayView, stayCreateView

# Urls/Views
urlpatterns = [
    path('view', stayView.as_view()),
    path('create', stayCreateView.as_view()),
]
