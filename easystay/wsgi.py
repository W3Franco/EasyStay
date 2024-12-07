# Imports
import os
from django.core.wsgi import get_wsgi_application

# IDK
os.environ.setdefault('DJANGO_SETTINGS_MODULE', 'easystay.settings')
application = get_wsgi_application()
