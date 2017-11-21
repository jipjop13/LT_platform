from django.conf.urls import url

from .api_views import (
    receive_live_data
)

urlpatterns = (
    url(
        r'^post_live_data',
        receive_live_data,
        name='receive_live_data',
    ),
)
