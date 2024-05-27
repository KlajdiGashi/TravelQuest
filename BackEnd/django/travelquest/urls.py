"""
URL configuration for travelquest project.

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/5.0/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""

from django.conf import settings
from django.conf.urls.static import static
from django.urls import re_path
from api import views

urlpatterns = [
    re_path('api/user', views.user, name='user'),
    #re_path('api/test_token', views.test_token, name='test_token'),
    re_path('api/vendor', views.vendor, name='vendor'),
    re_path('api/ticket', views.ticket, name='ticket'),
    re_path('api/transaction', views.transaction, name='transaction'),
    re_path('api/payment', views.payment, name='payment'),
    #re_path('api/payment/(?P<pk>[0-9]+)', views.payment_detail, name='payment_detail'),
    re_path('api/change_password', views.change_password, name='change_password'),
    ]


# Serve media files during development
if settings.DEBUG:
    urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)