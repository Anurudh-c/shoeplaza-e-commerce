# Generated by Django 4.1.7 on 2023-03-27 11:23

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('order_management', '0010_alter_order_order_number'),
    ]

    operations = [
        migrations.AlterField(
            model_name='order',
            name='created_at',
            field=models.DateTimeField(auto_now_add=True),
        ),
        migrations.AlterField(
            model_name='order',
            name='updated_at',
            field=models.DateTimeField(auto_now=True),
        ),
    ]