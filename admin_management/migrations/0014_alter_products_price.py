# Generated by Django 4.1.7 on 2023-03-27 09:55

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('admin_management', '0013_banner'),
    ]

    operations = [
        migrations.AlterField(
            model_name='products',
            name='price',
            field=models.PositiveIntegerField(),
        ),
    ]
