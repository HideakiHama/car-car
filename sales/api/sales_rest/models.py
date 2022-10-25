from django.db import models

# Customer Model
# Each customer has a name, address and phone number

class Customer(models.Model):
    name = models.CharField(max_length=200)
    address = models.CharField(max_length=200)
    phone_number = models.CharField(max_length=100, unique=True)
    
    def __str__(self):
        return f"{self.name}"


# SalesPerson model
# contains a name and employee number

class SalesPerson(models.Model):
    name = models.CharField(max_length=100)
    employee_number = models.PositiveSmallIntegerField(unique=True)


# Automobile Value Object --> SalesRecord
# contains a vin property

class AutomobileVO(models.Model):
    vin = models.CharField(max_length=17, unique=True)

    def __str__(self):
        return f"{self.vin}"


# A salesrecord model that has a connection to Automobile,
# Sales Person and a Customer as well as a sales price

class SalesRecord(models.Model):
    # connection to automobile
    automobile = models.ForeignKey(
        AutomobileVO,
        related_name = "sales_records",
        on_delete=models.PROTECT,
    )
    # connection to sales person
    sales_person = models.ForeignKey(
        SalesPerson,
        related_name="sales_records",
        on_delete=models.PROTECT,
    )
    #connection to customer
    customer = models.ForeignKey(
        Customer,
        related_name="sales_records",
        on_delete=models.PROTECT,
    )
    def __str__(self):
        return f"{self.sales_person}"
