# Generated by Django 3.1 on 2020-09-26 07:44

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('backend', '0001_initial'),
    ]

    operations = [
        migrations.AlterModelOptions(
            name='todo',
            options={'ordering': ['created_at']},
        ),
        migrations.AlterField(
            model_name='todo',
            name='text',
            field=models.CharField(max_length=256),
        ),
    ]