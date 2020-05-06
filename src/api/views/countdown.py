from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework.status import HTTP_400_BAD_REQUEST, HTTP_200_OK

from api.serializers.countdown_seralizers import (
    CountdownSerializer,
    CountdownDeleteSerializer,
)


class CountdownCreateAPI(APIView):
    def post(self, request):
        serializer = CountdownSerializer(data=request.data)

        if not serializer.is_valid():
            return Response(status=HTTP_400_BAD_REQUEST)

        return Response(status=HTTP_200_OK)


class CountdownDeleteAPI(APIView):
    def post(self, request):
        serializer = CountdownDeleteSerializer(data=request.data)

        if not serializer.is_valid():
            return Response(status=HTTP_400_BAD_REQUEST)

        return Response(status=HTTP_200_OK)
