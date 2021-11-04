# todos/views.py
from rest_framework import generics, permissions, viewsets
from rest_framework.views import APIView

from .models import Todo, LinkData, StartPage, StyleData
from .serializers import TodoSerializer, LinkDataSerializer, StartPageSerializer, StyleDataSerializer


class ListTodo(generics.ListCreateAPIView):
    queryset = Todo.objects.all()
    serializer_class = TodoSerializer


class DetailTodo(generics.RetrieveUpdateDestroyAPIView):
    queryset = Todo.objects.all()
    serializer_class = TodoSerializer

class DetailLinkData(viewsets.ModelViewSet):
    queryset = LinkData.objects.all()
    serializer_class = LinkDataSerializer

    permission_classes = (permissions.AllowAny,)
    http_method_names = ['get', 'head']

    def get_queryset(self, *args, **kwargs):
        # current_user = self.request.user

        if 'pk' in self.kwargs.keys():
            return super().get_queryset(*args, **kwargs)
        elif 'userlinks' in self.kwargs.keys():
            links = LinkData.objects.filter(user__username=self.kwargs.get('userlinks'))
            return links
        elif all(k in ['user', 'linkname'] for k in self.kwargs.keys()):
            links = LinkData.objects.filter(user__username=self.kwargs.get('user'), urlname=self.kwargs.get('linkname'))
            return links

class DetailStartPage(viewsets.ModelViewSet):
    queryset = StartPage.objects.all()
    serializer_class = StartPageSerializer

    permission_classes = (permissions.AllowAny,)
    http_method_names = ['get', 'head']

    def get_queryset(self, *args, **kwargs):
        # current_user = self.request.user

        if 'pk' in self.kwargs.keys():
            return super().get_queryset(*args, **kwargs)
        elif all(k in ['user', 'linkname'] for k in self.kwargs.keys()):
            startpage = StartPage.objects.filter(creator__username=self.kwargs.get('user'), urlname=self.kwargs.get('linkname'))
            return startpage

class DetailStyleData(viewsets.ModelViewSet):
    queryset = StyleData.objects.all()
    serializer_class = StyleDataSerializer

    permission_classes = (permissions.AllowAny,)
    http_method_names = ['get', 'head']

    def get_queryset(self, *args, **kwargs):
        # current_user = self.request.user

        if 'pk' in self.kwargs.keys():
            return super().get_queryset(*args, **kwargs)
        elif all(k in ['user', 'linkname'] for k in self.kwargs.keys()):
            startpage = StyleData.objects.filter(owner__username=self.kwargs.get('user'), urlname=self.kwargs.get('stylename'))
            return startpage

