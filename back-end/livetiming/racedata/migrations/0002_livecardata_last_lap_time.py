# -*- coding: utf-8 -*-
# Generated by Django 1.11.6 on 2017-11-25 16:05
from __future__ import unicode_literals

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('racedata', '0001_initial'),
    ]

    operations = [
        migrations.AddField(
            model_name='livecardata',
            name='last_lap_time',
            field=models.DecimalField(decimal_places=14, default=0, max_digits=20),
        ),
    ]