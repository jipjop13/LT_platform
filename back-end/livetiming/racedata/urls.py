from django.conf.urls import include, url

urlpatterns = (
    url(r'^api/', include('livetiming.racedata.api_urls')),
)
