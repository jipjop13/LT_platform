# -*- coding: utf-8 -*-
# Generated by Django 1.11.6 on 2017-11-25 15:43
from __future__ import unicode_literals

from django.conf import settings
from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    initial = True

    dependencies = [
        migrations.swappable_dependency(settings.AUTH_USER_MODEL),
    ]

    operations = [
        migrations.CreateModel(
            name='LiveCarData',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('created', models.DateTimeField(auto_now_add=True)),
                ('driver_id', models.IntegerField()),
                ('current_lap_time', models.DecimalField(decimal_places=14, default=0, max_digits=20)),
                ('best_lap_time', models.DecimalField(decimal_places=14, default=0, max_digits=20)),
                ('sector_1_time', models.DecimalField(decimal_places=14, default=0, max_digits=20)),
                ('sector_2_time', models.DecimalField(decimal_places=14, default=0, max_digits=20)),
                ('car_position', models.IntegerField()),
                ('tyre_compound', models.IntegerField()),
                ('in_pits', models.IntegerField()),
                ('current_lap_invalid', models.BooleanField()),
                ('current_lap_number', models.IntegerField()),
                ('penalties', models.IntegerField()),
                ('vehicle_fia_flag', models.IntegerField()),
            ],
        ),
        migrations.CreateModel(
            name='Session',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('total_laps', models.IntegerField()),
                ('track_size', models.DecimalField(decimal_places=5, default=0, max_digits=20)),
                ('number_of_cars', models.IntegerField()),
                ('track_number', models.IntegerField()),
                ('session_type', models.IntegerField()),
                ('session_time_left', models.DecimalField(decimal_places=5, default=0, max_digits=20)),
            ],
        ),
        migrations.CreateModel(
            name='UserProfile',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('driver_id', models.IntegerField()),
                ('team_id', models.IntegerField()),
                ('user', models.OneToOneField(on_delete=django.db.models.deletion.CASCADE, to=settings.AUTH_USER_MODEL)),
            ],
        ),
        migrations.AddField(
            model_name='session',
            name='user_profile',
            field=models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='racedata.UserProfile'),
        ),
        migrations.AddField(
            model_name='livecardata',
            name='session',
            field=models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='racedata.Session'),
        ),
    ]
