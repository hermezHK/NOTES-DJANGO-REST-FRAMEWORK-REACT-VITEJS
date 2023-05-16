from django.urls import path, include
from rest_framework.routers import DefaultRouter
from tasks import views

router = DefaultRouter()
router.register('', views.TasksView, basename='tasks')


urlpatterns = [
    path("tasks", include(router.urls))
]
