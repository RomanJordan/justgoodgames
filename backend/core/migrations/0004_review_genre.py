# Generated by Django 3.1.1 on 2020-12-06 21:20

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('core', '0003_auto_20201205_1948'),
    ]

    operations = [
        migrations.AddField(
            model_name='review',
            name='genre',
            field=models.CharField(default='N/A', max_length=100),
        ),
    ]