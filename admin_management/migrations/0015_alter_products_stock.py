# Generated by Django 4.1.7 on 2023-03-27 11:52

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('admin_management', '0014_alter_products_price'),
    ]

    operations = [
        migrations.AlterField(
            model_name='products',
            name='stock',
            field=models.PositiveIntegerField(),
        ),
    ]
