from backend.serializers import TodoSerializer
from rest_framework import generics

from backend.models import Todo

class TodoListCreate(generics.ListCreateAPIView):
	queryset = Todo.objects.all()
	serializer_class = TodoSerializer


