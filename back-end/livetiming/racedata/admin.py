from django.contrib import admin

from .models import LiveCarData, Session, UserProfile

admin.site.register(LiveCarData)
admin.site.register(Session)
admin.site.register(UserProfile)
