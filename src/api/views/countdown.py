from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework.status import HTTP_400_BAD_REQUEST, HTTP_200_OK

from api.serializers.countdown_seralizers import (
    CountdownSerializer,
    CountdownDeleteSerializer,
)
from covid19.models import Countdown


class CountdownGetAPI(APIView):
    def get(self, request):
        countdowns = Countdown.objects.order_by("target_date").values(
            "id", "target", "target_date"
        )
        return Response(status=HTTP_200_OK, data=countdowns)


class CountdownCreateAPI(APIView):
    def post(self, request):
        serializer = CountdownSerializer(data=request.data)

        if not serializer.is_valid(raise_exception=True):
            return Response(status=HTTP_400_BAD_REQUEST)

        countdown = serializer.save()

        return Response(status=HTTP_200_OK, data={"id": countdown.id})


class CountdownDeleteAPI(APIView):
    def post(self, request):
        serializer = CountdownDeleteSerializer(data=request.data)

        if not serializer.is_valid(raise_exception=True):
            return Response(status=HTTP_400_BAD_REQUEST)

        id = serializer.validated_data["id"]
        countdown = Countdown.objects.get(id=id)
        countdown.delete()

        return Response(status=HTTP_200_OK)
