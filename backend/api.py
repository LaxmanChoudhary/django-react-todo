from backend.models import Todo
from rest_framework import viewsets
from backend.serializers import TodoSerializer


class TodoViewSet(viewsets.ModelViewSet):
	serializer_class = TodoSerializer

	def get_queryset(self):
		return Todo.objects.all()