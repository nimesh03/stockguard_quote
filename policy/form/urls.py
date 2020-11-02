from rest_framework import routers
from .api import SbQuoteViewSet

router = routers.DefaultRouter()
router.register('api/form', SbQuoteViewSet, 'form')

urlpatterns = router.urls