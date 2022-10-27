# Generated by Django 4.0.3 on 2022-10-27 06:20

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='AutomobileVO',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('vin', models.CharField(max_length=17, unique=True)),
                ('import_href', models.CharField(blank=True, max_length=200, null=True, unique=True)),
            ],
        ),
        migrations.CreateModel(
            name='Technician',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=25)),
                ('employee_number', models.IntegerField(unique=True)),
            ],
        ),
        migrations.CreateModel(
            name='Time',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=10)),
            ],
        ),
        migrations.CreateModel(
            name='Service',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('customer_name', models.CharField(max_length=25)),
                ('new_vin', models.CharField(max_length=17, unique=True)),
                ('date', models.DateField()),
                ('reason', models.CharField(max_length=100)),
                ('vip', models.BooleanField(default=True)),
                ('service_finished', models.BooleanField(default=False)),
                ('technician', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='servicetech', to='service_rest.technician')),
                ('time', models.ForeignKey(on_delete=django.db.models.deletion.PROTECT, related_name='service', to='service_rest.time')),
                ('vin_service', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='vin_service', to='service_rest.automobilevo')),
            ],
        ),
    ]
