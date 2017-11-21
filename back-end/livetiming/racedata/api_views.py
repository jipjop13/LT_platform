import json

from django.http import HttpResponse
from django.views.decorators.csrf import csrf_exempt


@csrf_exempt
def receive_live_data(request):
    if request.method == "POST":
        data = json.loads(request.body)
    return HttpResponse(status=418)
