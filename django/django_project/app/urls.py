# todos/urls.py
from django.urls import path

from . import views

urlpatterns = [
    path('', views.ListTodo.as_view()),
    path('<int:pk>/', views.DetailTodo.as_view()),


    path('user/<str:userlinks>/links', views.DetailLinkData.as_view(actions={'get': 'list'})),


    path('links/<int:pk>', views.DetailLinkData.as_view(actions={'get': 'list'})),
    path('links/<int:pk>', views.DetailLinkData.as_view(actions={'get': 'list'})),
    path('links/<str:user>/<str:linkname>', views.DetailLinkData.as_view(actions={'get': 'list'})),

    path('style/<int:pk>', views.DetailStyleData.as_view(actions={'get': 'list'})),
    path('style/<str:user>/<str:stylename>', views.DetailStyleData.as_view(actions={'get': 'list'})),


    path('startpage/<int:pk>', views.DetailStartPage.as_view(actions={'get': 'list'})),
    path('startpage/<str:user>/<str:linkname>', views.DetailStartPage.as_view(actions={'get': 'list'})),
]