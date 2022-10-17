from django.urls import path
from . import views

urlpatterns = [
    path('', views.index),
    path('leetcode', views.leetCode_list)
]