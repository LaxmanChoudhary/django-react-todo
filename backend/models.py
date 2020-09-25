from django.db import models

# Create your models here.
class Todo(models.Model):
	text = models.CharField(max_length=100)
	completed = models.BooleanField(default=False)
	created_at = models.DateTimeField(auto_now_add=True)
	
	class Meta:
		ordering = ['created_at']