# todos/admin.py
from django.contrib import admin

from django.apps import apps
models = apps.get_models()

for model in models:
    if model._meta.app_label in ("base_app"):
        admin.site.register(model)