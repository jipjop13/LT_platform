from django.conf.urls import url

from .api_views import (
    ReceiveLiveData
)

urlpatterns = (
    url(
        r'^post-live-data/',
        ReceiveLiveData.as_view(),
        name='receive_live_data',
    ),
)
