#https://towardsdatascience.com/build-a-fully-production-ready-machine-learning-app-with-python-django-react-and-docker-c4d938c251e5

from rest_auth.views import (LoginView, LogoutView, PasswordChangeView)
from rest_framework.authentication import TokenAuthentication
from rest_framework.permissions import IsAuthenticated
# Create your views here.
class APILogoutView(LogoutView):
    authentication_classes = [TokenAuthentication]
    permission_classes = [IsAuthenticated]
class APILoginView(LoginView):
    pass
class APIPasswordUpdateView(PasswordChangeView):
    ass = 1
    authentication_classes = [TokenAuthentication]