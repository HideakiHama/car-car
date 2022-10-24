from django.shortcuts import render

# import encoders from common.json.py
# import models from the api.models
from common.json import ModelEncoder
from .models import SalesRecord, AutomobileVO, SalesPerson, Customer


# View for customer encoder
class CustomerEncoder(ModelEncoder):
    model = Customer
    properties = ["name","address","phone_number", "id"]


# View for Sales Person encoder
class SalesPersonEncoder(ModelEncoder):
    model = SalesPerson
    properties = ["name", "employee_number", "id"]


# View for the value object Automobile VO
class AutomobileVOEncoder(ModelEncoder):
    model = AutomobileVO
    properties = ["vin", "id"]


# View Encoder for SalesRecord List
# This has to go last, or else the encoders do not work
class SalesRecordListEncoder(ModelEncoder):
    model = SalesRecord
    properties = [
        "sales_person",
        "customer",
        "sales_price",
        "id",
    ]
    encoders = {
        "sales_person" : SalesPersonEncoder(),
        "customer" : CustomerEncoder(),
    }




