from rest_framework import routers
from backend.api import TodoViewSet

router = routers.DefaultRouter()
router.register('api/todo', TodoViewSet, 'todo')

urlpatterns = router.urls