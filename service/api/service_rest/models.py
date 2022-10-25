from django.db import models


class AutomobileVO(models.Models):
    vin = models.CharField(max_length=17, unique=True)
    import_href = models.CharField(max_length=200, blank=True, null=True, unique=True)


class Technician(models.Models):
    name = models.CharField(max_length=200)
    employee_number = models.IntegerField(unique=True)

    def __str__(self):
        return self.name


class Service(models.Models):
    customer_name = models.CharField(max_length=200)
    date_app = models.DateField()
    time_app = models.TimeField(auto_now_add=True)
    reason = models.CharField(max_length=200)
    technician = models.ForeignKey(
        Technician, name="ServiceAppointment", on_delete=models.CASCADE
    )
    vin = models.ForeignKey(AutomobileVO, name="CostomerVin", on_delete=models.CASCADE)
