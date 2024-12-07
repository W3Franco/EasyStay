# Imports
import os
from django.core.asgi import get_asgi_application

# IDK
os.environ.setdefault('DJANGO_SETTINGS_MODULE', 'easystay.settings')
application = get_asgi_application()
