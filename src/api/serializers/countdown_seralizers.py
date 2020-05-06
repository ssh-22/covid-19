from rest_framework import serializers

from covid19.models import Countdown


class CountdownSerializer(serializers.ModelSerializer):
    class Meta:
        model = Countdown
        fields = ["target", "target_date"]


class CountdownDeleteSerializer(serializers.Serializer):
    id = serializers.IntegerField()
