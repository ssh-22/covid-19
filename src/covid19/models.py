from django.db import models


class Countdown(models.Model):
    target = models.CharField(max_length=30)
    target_date = models.DateTimeField()
