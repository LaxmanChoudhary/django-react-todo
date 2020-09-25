from django.urls import path
from backend import views

app_name = 'backend'

urlpatterns =[
	path('api/todo/', views.TodoListCreate.as_view()),
]