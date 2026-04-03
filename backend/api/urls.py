from django.urls import path
from . import views

urlpatterns = [
    path('api/health/', views.health),
    path('about/', views.about, name='about'),
    path('api/tasks/', views.task_list, name='task-list'),
    path('api/tasks/<int:pk>/', views.task_detail, name='task-detail'),
]
