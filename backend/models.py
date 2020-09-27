from django.db import models
from django.contrib.auth.models import User

# Create your models here.
class Todo(models.Model):
	text = models.CharField(max_length=256)
	completed = models.BooleanField(default=False)
	owner = models.ForeignKey(User, related_name="todos", on_delete=models.CASCADE, null=True)
	created_at = models.DateTimeField(auto_now_add=True)
	
	class Meta:
		ordering = ['created_at']