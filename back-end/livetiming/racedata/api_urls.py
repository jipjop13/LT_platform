from django.conf.urls import url

from .api_views import (
    LiveData,
)

urlpatterns = (
    url(
        r'^post-live-data/',
        LiveData.as_view(),
        name='post_live_data',
    ),
    url(
        r'^get-live-data/(?P<session_id>\d+)/',
        LiveData.as_view(),
        name='get_live_data',
    ),
)
