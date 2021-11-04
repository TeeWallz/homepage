# todo_api/urls.py
from django.contrib import admin
from django.urls import include, path


urlpatterns = [
    path('', include('app.urls')),
    path('api/auth/', include('users.urls')),
    path('tomadmin/', admin.site.urls),
]