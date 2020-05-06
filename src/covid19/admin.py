from django.contrib import admin
from .models import Countdown


@admin.register(Countdown)
class CountdownAdmin(admin.ModelAdmin):
    pass
