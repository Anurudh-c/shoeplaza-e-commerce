# Generated by Django 4.1.7 on 2023-03-14 09:34

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('order_management', '0008_orderproduct'),
    ]

    operations = [
        migrations.AddField(
            model_name='usercoupon',
            name='order',
            field=models.ForeignKey(null=True, on_delete=django.db.models.deletion.SET_NULL, related_name='order_coupon', to='order_management.order'),
        ),
    ]
