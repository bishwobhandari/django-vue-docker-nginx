from django.shortcuts import render
from rest_framework.generics import GenericAPIView
from rest_framework import serializers, status
from django.middleware.csrf import get_token
from rest_framework.response import Response
# Create your views here.


class CSRFTokenView(GenericAPIView):

    def get(self, request):
        token = get_token(self.request)
        return Response(token, status=status.HTTP_200_OK)
