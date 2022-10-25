from django.urls import path
from .views import list_service, detail_service

urlpatterns = [
    path("service/", list_service, name="list_service"),
    path("service/<int:vin>", detail_service, name="detail_service"),
]
