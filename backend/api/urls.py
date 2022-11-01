from django.urls import path
from . import views

urlpatterns = [
    path('', views.index),
    path('leetcode', views.leetCode_list),
    path("leetcode/id/<int:pk>/", views.filterByID),
    path("leetcode/dsaType/<str:dsa>/", views.filterByDSA),
    path("leetcode/difficulty/<str:diff>/", views.filterByDifficulty),
]