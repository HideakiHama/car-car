from django.shortcuts import render
from django.views.decorators.http import require_http_methods
import json
from django.http import JsonResponse
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

    def get_extra_data(self, o):
        return {
            "vin": o.automobile.vin
        }



@require_http_methods(["GET"])
def automobile_vo_list(request):
    if request.method == "GET":
        automobiles = AutomobileVO.objects.all()
        return JsonResponse(
            {"automobiles": automobiles},
            encoder=AutomobileVOEncoder,
            safe=False,
        )

@require_http_methods(["DELETE"])
def auto_vo_delete(request, pk):
    if request.method == "DELETE":
        count, _ = AutomobileVO.objects.filter(id=pk).delete()
        return JsonResponse({"deleted": count > 0})


@require_http_methods(["GET", "POST"])
def sales_record_list(request):
    if request.method == "GET":
        sales_records = SalesRecord.objects.all()
        return JsonResponse(
            {"sales_records": sales_records},
            encoder=SalesRecordListEncoder,
            safe=False,
        )
    else:
        try:
            content = json.loads(request.body)
            content = {
                **content,
                "sales_person": SalesPerson.objects.get(pk=content["sales_person"]),
                "automobile": AutomobileVO.objects.get(vin=content["automobile"]),
                "customer": Customer.objects.get(pk=content["customer"]),
            }
            sales_record = SalesRecord.objects.create(**content)
            return JsonResponse(
                {"sales_record": sales_record},
                encoder=SalesRecordListEncoder,
                safe=False,
            )
        except:
            response = JsonResponse(
                {"message": "Error"}
            )
            response.status_code = 400
            return response


@require_http_methods(["GET", "POST"])
def customer_list(request):
    if request.method == "GET":
        customers = Customer.objects.all()
        return JsonResponse(
            {"customers": customers},
            encoder=CustomerEncoder,
            safe=False,
        )
    else:
        try:
            content = json.loads(request.body)
            customer = Customer.objects.create(**content)
            return JsonResponse(customer, encoder=CustomerEncoder, safe=False)
        except:
            response = JsonResponse(
                {"message": "Error"}
            )
            response.status_code = 400
            return response


@require_http_methods(["DELETE"])
def customer_delete(request, pk):
    if request.method == "DELETE":
        count, _ = Customer.objects.filter(id=pk).delete()
        return JsonResponse({"deleted": count > 0})


@require_http_methods(["GET", "POST"])
def sales_person_list(request):
    if request.method == "GET":
        sales_persons = SalesPerson.objects.all()
        return JsonResponse(
            {"sales_persons": sales_persons},
            encoder=SalesPersonEncoder,
        )
    else:
        try:
            content = json.loads(request.body)
            sales_person = SalesPerson.objects.create(**content)
            return JsonResponse(sales_person, encoder=SalesPersonEncoder, safe=False)
        except:
            response = JsonResponse(
                {"message": "Error"}
            )
            response.status_code = 400
            return response


@require_http_methods(["GET", "DELETE"])
def sales_person_details(request, pk):
    if request.method == "GET":
        try:
            sales_person = SalesPerson.objects.get(id=pk)
            return JsonResponse(sales_person, encoder=SalesPersonEncoder, safe=False)
        except SalesPerson.DoesNotExist:
            response = JsonResponse({"message": "NonExistent"})
            response.status_code = 404
            return response
    else:
        if request.method == "DELETE":
            count, _ = SalesPerson.objects.filter(id=pk).delete()
            return JsonResponse({"deleted": count > 0})
