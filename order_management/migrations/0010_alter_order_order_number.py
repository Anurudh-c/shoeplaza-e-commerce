# Generated by Django 4.1.7 on 2023-03-14 09:39

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('order_management', '0009_usercoupon_order'),
    ]

    operations = [
        migrations.AlterField(
            model_name='order',
            name='order_number',
            field=models.CharField(max_length=50),
        ),
    ]