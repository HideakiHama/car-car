from django.shortcuts import render
from django.http import JsonResponse
import json

from django.views.decorators.http import require_http_methods
from common.json import ModelEncoder
from .models import AutomobileVO, Technician, Service


class AutomobileVOEncoder(ModelEncoder):
    model = AutomobileVO
    properties = ["import_href", "vin"]


class TechnicianEncoder(ModelEncoder):
    model = Technician
    properties = ["name", "employee_number"]


class ServiceListEncoder(ModelEncoder):
    model = Service
    properties = [
        "customer_name",
        "date_app",
        "time_app",
        "reason",
        "technician",
        "vin_service",
    ]

    encoder = {"vin_service": AutomobileVOEncoder(), "technician": TechnicianEncoder()}


class ServiceDetailEncoder(ModelEncoder):
    model = Service
    properties = [
        "customer_name",
        "date_app",
        "time_app",
        "reason",
        "technician",
        "vin_service",
    ]

    encoder = {"vin_service": AutomobileVOEncoder(), "technician": TechnicianEncoder()}


@require_http_methods(["GET", "POST"])
def list_service(request):
    if request.method == "GET":
        service = Service.objects.all()
        return JsonResponse({"service": service}, encoder=ServiceListEncoder)
    else:
        content = json.loads(request.body)
        try:
            vin_service = content["vin_service"]

            vin = AutomobileVO.objects.get(import_href=vin_service)
            print("###VIN####", vin)
            content["vin_service"] = vin
        except AutomobileVO.DoesNotExist:
            return JsonResponse(
                {"message": "Vin number doesn't exist"},
                status=400,
            )

        service = Service.objects.create(**content)
        return JsonResponse(service, encoder=ServiceDetailEncoder, safe=False)


@require_http_methods(["GET", "DELETE", "PUT"])
def detail_service(request, vin):
    if request.method == "GET":
        service = Service.objects.get(vin_service=vin)
        return JsonResponse(service, encoder=ServiceDetailEncoder, safe=False)
    elif request.method == "DELETE":
        count, _ = Service.objects.filter(vin_service=vin).delete()
        return JsonResponse({"deleted?": count > 0})
    else:
        content = json.loads(request.body)
        Service.objects.filter(vin=vin).update(**content)
        service = Service.objects.get(vin_service=vin)
        return JsonResponse(service, encoder=ServiceDetailEncoder, safe=False)
