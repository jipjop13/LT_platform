from django.contrib.auth.models import User
from django.db import models


class UserProfile(models.Model):
    user = models.OneToOneField(User, on_delete=models.CASCADE)
    driver_id = models.IntegerField(null=False)
    team_id = models.IntegerField(null=False)


class Session(models.Model):
    user_profile = models.ForeignKey(UserProfile, on_delete=models.CASCADE)
    total_laps = models.IntegerField()
    track_size = models.DecimalField(max_digits=20, decimal_places=5, default=0)
    number_of_cars = models.IntegerField()
    track_number = models.IntegerField()
    session_type = models.IntegerField()


class LiveCarData(models.Model):
    driver_id = models.IntegerField(null=False)
    session = models.ForeignKey(Session, on_delete=models.CASCADE)
    current_lap_time = models.TimeField()
    best_lap_time = models.TimeField()
    sector_1_time = models.TimeField()
    sector_2_time = models.TimeField()
    car_position = models.IntegerField()
    tyre_compound = models.IntegerField()
    in_pits = models.BooleanField()
    current_lap_invalid = models.BooleanField()
    penalties = models.TimeField()
    vehicle_fia_flag = models.IntegerField()
