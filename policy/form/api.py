from .models import SbQuote, SbQuoteLoccvg
from rest_framework import viewsets, permissions, status
from .serializers import SbQuoteSerializer, SbQuoteLoccvgSerializer
from rest_framework.response import Response
from django.http import Http404
# from rest_framework.decorators import api_view
# from drf_multiple_model import viewsets


# SbQuote Viewset

class SbQuoteViewSet(viewsets.ModelViewSet):

    queryset = SbQuote.objects.all()
    permissions = (permissions.AllowAny)
    serializer_class = SbQuoteSerializer

# SbQuoteLoccvg Viewset

class SbQuoteLoccvgViewSet(viewsets.ModelViewSet):
    queryset = SbQuoteLoccvg.objects.all()
    permissions = (permissions.AllowAny)
    serializer_class = SbQuoteLoccvgSerializer

