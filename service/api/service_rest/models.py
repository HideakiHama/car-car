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


class DisplayTime(models.Model):
    name = models.CharField(max_length=10)
    id = models.PositiveSmallIntegerField(primary_key=True)


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
    display_time = models.ForeignKey(
        DisplayTime,
        related_name="service",
        on_delete=models.PROTECT,
    )

    vip = models.BooleanField()

    def __str__(self):
        return self.customer_name

    # def create_vip(self):
    #     try:
    #         self.vip
    #     except ObjectDoesNotExist:
    #         Vip.objects.create(service=self)


## Not Used ##
# class Vip(models.Model):
#     created = models.DateField()
#     service = models.OneToOneField(
#         Service, related_name="vip_service", on_delete=models.CASCADE, primary_key=True
#     )
