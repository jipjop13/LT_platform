from django.db import models
from django_extensions.db.fields.json import JSONField


class LiveData(models.Model):
    test = models.CharField(max_length=255)
