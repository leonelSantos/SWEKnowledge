# Generated by Django 4.1.1 on 2022-10-11 20:03

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = []

    operations = [
        migrations.CreateModel(
            name="LeetCode",
            fields=[
                (
                    "id",
                    models.BigAutoField(
                        auto_created=True,
                        primary_key=True,
                        serialize=False,
                        verbose_name="ID",
                    ),
                ),
                ("name", models.CharField(max_length=240, verbose_name="Name")),
                ("explanation", models.TextField()),
                ("solution", models.TextField()),
            ],
        ),
    ]
