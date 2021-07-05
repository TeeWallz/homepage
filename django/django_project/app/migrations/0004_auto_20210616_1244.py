# Generated by Django 3.2.4 on 2021-06-16 12:44

from django.conf import settings
from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        migrations.swappable_dependency(settings.AUTH_USER_MODEL),
        ('app', '0003_alter_styledata_data'),
    ]

    operations = [
        migrations.AddField(
            model_name='linkdata',
            name='urlname',
            field=models.CharField(default='kek', max_length=200),
            preserve_default=False,
        ),
        migrations.AddField(
            model_name='styledata',
            name='urlname',
            field=models.CharField(default='lel', max_length=200),
            preserve_default=False,
        ),
        migrations.AlterField(
            model_name='linkdata',
            name='user',
            field=models.OneToOneField(on_delete=django.db.models.deletion.DO_NOTHING, to=settings.AUTH_USER_MODEL),
        ),
        migrations.AlterField(
            model_name='styledata',
            name='creator',
            field=models.OneToOneField(on_delete=django.db.models.deletion.DO_NOTHING, to=settings.AUTH_USER_MODEL),
        ),
        migrations.CreateModel(
            name='StartPage',
            fields=[
                ('id', models.AutoField(primary_key=True, serialize=False)),
                ('creator', models.OneToOneField(on_delete=django.db.models.deletion.DO_NOTHING, to=settings.AUTH_USER_MODEL)),
                ('links', models.OneToOneField(on_delete=django.db.models.deletion.DO_NOTHING, to='app.linkdata')),
                ('style', models.OneToOneField(on_delete=django.db.models.deletion.DO_NOTHING, to='app.styledata')),
            ],
        ),
    ]