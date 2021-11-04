# todos/serializers.py
from rest_framework import serializers
from .models import Todo, LinkData, StartPage, StyleData


class TodoSerializer(serializers.ModelSerializer):
    class Meta:
        fields = (
            'id',
            'title',
            'description',
        )
        model = Todo

class LinkDataSerializer(serializers.ModelSerializer):
    class Meta:
        fields = (
            "id",
            "user",
            "name",
            "urlname",
            "data",
        )
        model = LinkData

class StyleDataSerializer(serializers.ModelSerializer):
    class Meta:
        fields = (
            'id',
            'creator',
            'name',
            'urlname',
            'data',
        )
        model = StyleData

class StartPageSerializer(serializers.ModelSerializer):
    class Meta:
        fields = (
            'id',
            'creator',
            'links',
            'style',
            'name',
            'urlname',
        )
        model = StartPage




