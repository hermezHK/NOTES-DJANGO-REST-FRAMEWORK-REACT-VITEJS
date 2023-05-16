from django.shortcuts import render
from rest_framework import viewsets
from .serializer import TaskSerializer
from .models import Tasks

class TasksView(viewsets.ModelViewSet):
    serializer_class = TaskSerializer
    queryset = Tasks.objects.all()