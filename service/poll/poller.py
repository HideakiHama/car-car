import django
import os
import sys
import time
import json
import requests

sys.path.append("")
os.environ.setdefault("DJANGO_SETTINGS_MODULE", "service_project.settings")
django.setup()


from service_rest.models import AutomobileVO


def get_vin():
    response = requests.get("http://inventory-api:8000/api/automobiles/")
    content = json.loads(response.content)
    for vin in content["vins"]:
        AutomobileVO.objects.update_or_create(
            import_href=vin["href"], defaults={"vin": vin["vin"]}
        )


def poll():
    while True:
        print("Service poller polling for data")
        try:
            get_vin()
        except Exception as e:
            print(e, file=sys.stderr)
        time.sleep(60)


if __name__ == "__main__":
    poll()
