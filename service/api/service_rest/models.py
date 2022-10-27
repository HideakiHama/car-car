from django.db import models
from django.core.exceptions import ObjectDoesNotExist
from django.urls import reverse


class AutomobileVO(models.Model):
    vin = models.CharField(max_length=17)

    def get_api_url(self):
        return reverse("detail_service", kwargs={"vin": self.vin})


class Technician(models.Model):
    name = models.CharField(max_length=25)
    employee_number = models.IntegerField(unique=True)

    def __str__(self):
        return f"{self.name}"


class Time(models.Model):
    name = models.CharField(max_length=10)


class Service(models.Model):
    customer_name = models.CharField(max_length=25)
    date = models.DateField()
    reason = models.CharField(max_length=100)
    technician = models.ForeignKey(
        Technician, related_name="servicetech", on_delete=models.CASCADE
    )
    vin_service = models.CharField(max_length=17)

    time = models.ForeignKey(
        Time,
        related_name="service",
        on_delete=models.PROTECT,
    )

    vip = models.BooleanField(default=False)
    service_finished = models.BooleanField(default=False)

    def __str__(self):
        return self.customer_name
