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
    properties = ["name", "employee_number", "id"]


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

    def get_extra_data(self, o):
        return {"name": o.technician.name}


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
            content["vin_service"] = vin
        except AutomobileVO.DoesNotExist:
            return JsonResponse(
                {"message": "Vin number doesn't exist"},
                status=400,
            )
        try:
            technician = content["technician"]
            tech = Technician.objects.get(id=technician)
            print("###TECH###", tech)
            content["technician"] = tech

        except Technician.DoesNotExist:
            return JsonResponse({"message": "Technician doesn't exist"}, status=400)

        service = Service.objects.create(**content)
        print("###SERVICE####", service)
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
