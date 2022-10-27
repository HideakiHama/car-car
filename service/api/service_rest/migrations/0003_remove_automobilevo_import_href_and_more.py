# Generated by Django 4.0.3 on 2022-10-27 18:34

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('service_rest', '0002_alter_automobilevo_vin_alter_service_new_vin'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='automobilevo',
            name='import_href',
        ),
        migrations.RemoveField(
            model_name='service',
            name='new_vin',
        ),
        migrations.AlterField(
            model_name='service',
            name='vin_service',
            field=models.CharField(max_length=17),
        ),
        migrations.AlterField(
            model_name='service',
            name='vip',
            field=models.BooleanField(default=False),
        ),
    ]
