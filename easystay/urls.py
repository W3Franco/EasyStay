# Imports
from django.contrib import admin
from django.urls import include, path

# Urls/Views
urlpatterns = [
    path('admin/', admin.site.urls),
    path('back/', include('back.urls')),
    path('', include('front.urls'))
]