from django.urls import path
from .views import (
    list_service,
    detail_service,
    list_technician,
    detail_technician,
    list_time,
)

urlpatterns = [
    path("service/", list_service, name="list_service"),
    path("service/<int:pk>/", detail_service, name="detail_service"),
    path("technician/", list_technician, name="list_technician"),
    path("technician/<int:pk>/", detail_technician, name="detail_technician"),
    path("time/", list_time, name="list_time"),
]
