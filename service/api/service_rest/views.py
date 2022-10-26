from django.shortcuts import render
from django.http import JsonResponse
import json

from django.views.decorators.http import require_http_methods
from common.json import ModelEncoder
from .models import AutomobileVO, Technician, Service


class AutomobileVOEncoder(ModelEncoder):
    model = AutomobileVO
    properties = ["import_href", "vin", "id"]


class TechnicianEncoder(ModelEncoder):
    model = Technician
    properties = ["name", "employee_number", "id"]


class ServiceEncoder(ModelEncoder):
    model = Service
    properties = [
        "customer_name",
        "date_app",
        "time_app",
        "reason",
        "technician",
        "vin_service",
        "id",
    ]

    encoders = {"vin_service": AutomobileVOEncoder(), "technician": TechnicianEncoder()}


##Service##


@require_http_methods(["GET", "POST"])
def list_service(request):
    if request.method == "GET":
        service = Service.objects.all()
        return JsonResponse({"service": service}, encoder=ServiceEncoder)
    else:
        content = json.loads(request.body)
        try:
            vin_service = content["vin_service"]
            vin = AutomobileVO.objects.get(vin=vin_service)
            content["vin_service"] = vin
        except AutomobileVO.DoesNotExist:
            return JsonResponse(
                {"message": "Vin number doesn't exist"},
                status=400,
            )
        try:
            tech = Technician.objects.get(pk=content["technician"])
            content["technician"] = tech

        except Technician.DoesNotExist:
            return JsonResponse({"message": "Technician doesn't exist"}, status=400)

        service = Service.objects.create(**content)

        return JsonResponse(service, encoder=ServiceEncoder, safe=False)


@require_http_methods(["GET", "DELETE", "PUT"])
def detail_service(request, pk):
    if request.method == "GET":
        service = Service.objects.get(id=pk)
        return JsonResponse(service, encoder=ServiceEncoder, safe=False)
    elif request.method == "DELETE":
        count, _ = Service.objects.filter(id=pk).delete()
        return JsonResponse({"deleted?": count > 0})
    else:
        content = json.loads(request.body)
        Service.objects.filter(id=pk).update(**content)
        service = Service.objects.get(id=pk)
        return JsonResponse(service, encoder=ServiceEncoder, safe=False)


##Technician##


@require_http_methods(["GET", "POST"])
def list_technician(request):
    if request.method == "GET":
        technician = Technician.objects.all()
        return JsonResponse({"technician": technician}, encoder=TechnicianEncoder)
    else:
        content = json.loads(request.body)
        technician = Technician.objects.create(**content)
        return JsonResponse(technician, encoder=TechnicianEncoder, safe=False)


@require_http_methods(["GET", "DELETE", "PUT"])
def detail_technician(request, pk):
    if request.method == "GET":
        technician = Technician.objects.get(id=pk)
        return JsonResponse(technician, encoder=TechnicianEncoder, safe=False)
    elif request.method == "DELETE":
        count, _ = Technician.objects.filter(id=pk).delete()
        return JsonResponse({"deleted?": count > 0})
    else:
        content = json.loads(request.body)
        Technician.objects.filter(id=pk).update(**content)
        technician = Technician.objects.get(id=pk)
        return JsonResponse(technician, encoder=TechnicianEncoder, safe=False)
