# todos/models.py
from django.contrib.auth.models import User
from django.db import models

class Todo(models.Model):
    title = models.CharField(max_length=200)
    description = models.TextField()

    def __str__(self):
        """A string representation of the model."""
        return self.title

class LinkData(models.Model):
    id = models.AutoField(primary_key=True)
    user = models.OneToOneField(User, on_delete=models.DO_NOTHING)
    name = models.CharField(max_length=200)
    urlname = models.CharField(max_length=200)
    data = models.JSONField()

class StyleData(models.Model):
    id = models.AutoField(primary_key=True)
    creator = models.OneToOneField(User, on_delete=models.DO_NOTHING)
    name = models.CharField(max_length=200)
    urlname = models.CharField(max_length=200)
    data = models.TextField()

class StartPage(models.Model):
    id = models.AutoField(primary_key=True)
    creator = models.OneToOneField(User, on_delete=models.DO_NOTHING)
    links = models.OneToOneField(LinkData, on_delete=models.DO_NOTHING)
    style = models.OneToOneField(StyleData, on_delete=models.DO_NOTHING)
    name = models.CharField(max_length=200)
    urlname = models.CharField(max_length=200)