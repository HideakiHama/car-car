from django.db import models
from django.core.exceptions import ObjectDoesNotExist
from django.urls import reverse


class AutomobileVO(models.Model):
    vin = models.CharField(max_length=17, unique=True)
    import_href = models.CharField(max_length=200, blank=True, null=True, unique=True)

    def get_api_url(self):
        return reverse("detail_service", kwargs={"vin": self.vin})


class Technician(models.Model):
    name = models.CharField(max_length=200)
    employee_number = models.IntegerField(unique=True)

    def __str__(self):
        return f"{self.name}"


class Vip(models.Model):
    id = models.PositiveSmallIntegerField(primary_key=True)
    name = models.CharField(max_Length=10, unique=True)


class Service(models.Model):
    @classmethod
    def create(cls, **kwargs):
        kwargs["vip"] = Vip.objects.get(name="VIP")
        service = cls(**kwargs)
        service.save()
        return service

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
    vip = models.ForeignKey(Vip, related_name="service", on_delete=models.PROTECT)

    def non_vip(self):
        vip = Vip.objects.get(name="Non VIP")
        self.vip = vip
        self.save()

    def __str__(self):
        return self.customer_name
