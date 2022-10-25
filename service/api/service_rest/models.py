from django.db import models
from django.core.exceptions import ObjectDoesNotExist


class AutomobileVO(models.Model):
    vin = models.CharField(max_length=17, unique=True)
    import_href = models.CharField(max_length=200, blank=True, null=True, unique=True)


class Technician(models.Model):
    name = models.CharField(max_length=200)
    employee_number = models.IntegerField(unique=True)

    def __str__(self):
        return self.name


class Service(models.Model):
    customer_name = models.CharField(max_length=200)
    date_app = models.DateField()
    time_app = models.TimeField()
    reason = models.CharField(max_length=200)
    technician = models.ForeignKey(
        Technician, related_name="servicetech", on_delete=models.CASCADE
    )

    vin_service = models.ForeignKey(
        AutomobileVO, related_name="vin_service", on_delete=models.CASCADE
    )

    def __str__(self):
        return self.customer_name

    def create_vip(self):
        try:
            self.vip
        except ObjectDoesNotExist:
            Vip.objects.create(service=self)


class Vip(models.Model):
    created = models.DateField()
    service = models.OneToOneField(
        Service, related_name="vip", on_delete=models.CASCADE, primary_key=True
    )
