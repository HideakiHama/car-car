from django.shortcuts import render
from django.http import JsonResponse
import json

from django.views.decorators.http import require_http_methods
from common.json import ModelEncoder
from .models import AutomobileVO, Technician, Service


class AutomobileVOEncoder(ModelEncoder):
    model = AutomobileVO
    properties = ["vin"]


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
        "vin",
    ]

    encoder = {"vin": AutomobileVOEncoder(), "technician": TechnicianEncoder()}


class ServiceDetailEncoder(ModelEncoder):
    model = Service
    properties = [
        "customer_name",
        "date_app",
        "time_app",
        "reason",
        "technician",
        "vin",
    ]

    encoder = {"vin": AutomobileVOEncoder(), "technician": TechnicianEncoder()}


@require_http_methods(["GET", "POST"])
def list_service(request):
    if request.method == "GET":
        service = Service.objects.all()
        return JsonResponse({"service": service}, encoder=ServiceListEncoder)
    else:
        content = json.loads(request.body)
        try:
            vin_href = content["vin"]
            vin = AutomobileVO.object.get(import_href=vin_href)
            content["vin"] = vin
        except AutomobileVO.DoesNotExist:
            return JsonResponse(
                {"message": "Vin number doesn't exist"},
                status=400,
            )

        service = Service.objects.create(**content)
        return JsonResponse(service, encoder=ServiceDetailEncoder, safe=False)


@require_http_methods(["GET", "DELETE", "PUT"])
def detail_service(request, pk):
    if request.method == "GET":
        service = Service.object.get(id=pk)
        return JsonResponse(service, encoder=ServiceDetailEncoder, safe=False)
    elif request.method == "DELETE":
        count, _ = Service.object.filter(id=pk).delete()
        return JsonResponse({"deleted?": count > 0})
    else:
        content = json.loads(request.body)
        Service.objects.filter(id=pk).update(**content)
        service = Service.objects.get(id=pk)
        return JsonResponse(service, encoder=ServiceDetailEncoder, safe=False)


# class ServiceAppointmentDetail(ModelEncoder):
#     pass


# class PreviousServiceList(ModelEncoder):
#     pass
