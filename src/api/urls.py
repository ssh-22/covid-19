from django.urls import path

from api.views.countdown import CountdownGetAPI, CountdownCreateAPI, CountdownDeleteAPI

app_name = "api"

urlpatterns = [
    path("countdown/", CountdownGetAPI.as_view(), name="countdown"),
    path("countdown/create", CountdownCreateAPI.as_view(), name="countdown_create"),
    path("countdown/delete", CountdownDeleteAPI.as_view(), name="countdown_delete"),
]
