from django.urls import path, include
from rest_framework.documentation import include_docs_urls
from rest_framework.routers import DefaultRouter
from tasks import views

router = DefaultRouter()
router.register('', views.TasksView, basename='tasks')


urlpatterns = [
    path("tasks", include(router.urls)),
    path("docs/", include_docs_urls(title="Tasks API"))
]
