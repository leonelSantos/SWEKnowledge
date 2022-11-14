from django.urls import path
from . import views

urlpatterns = [
    path('', views.index),
    path('leetcode', views.leetCode_list),
    path("leetcode/id/<int:pk>/", views.filterByID),
    path("leetcode/dsaType/<str:dsa>/", views.filterByDSA),
    path("leetcode/difficulty/<str:diff>/", views.filterByDifficulty),
    path('pagecode', views.getPageCode),
    path('pagecode/nameAndOrder/<str:page>', views.filterCodeByPage),
    path('pageparagraph', views.getPageParagraphs),
    path('pageparagraph/nameAndOrder/<str:page>', views.filterParagraphByPage),
    path('pagetitles', views.getPageTitles),
    path('pagetitles/pageName/<str:page>', views.filterTitleByPage),
]