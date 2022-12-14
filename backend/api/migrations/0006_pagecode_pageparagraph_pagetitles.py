# Generated by Django 4.1.1 on 2022-11-04 20:59

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ("api", "0005_leetcode_difficulty"),
    ]

    operations = [
        migrations.CreateModel(
            name="PageCode",
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
                ("order", models.PositiveSmallIntegerField()),
                ("pageName", models.CharField(max_length=240, verbose_name="PageName")),
                (
                    "nameAndOrder",
                    models.CharField(max_length=240, verbose_name="PageName"),
                ),
                ("code", models.TextField()),
            ],
        ),
        migrations.CreateModel(
            name="PageParagraph",
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
                ("order", models.PositiveSmallIntegerField()),
                ("pageName", models.CharField(max_length=240, verbose_name="PageName")),
                (
                    "nameAndOrder",
                    models.CharField(max_length=240, verbose_name="PageName"),
                ),
                ("paragraph", models.TextField()),
            ],
        ),
        migrations.CreateModel(
            name="PageTitles",
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
                ("order", models.PositiveSmallIntegerField()),
                ("pageName", models.CharField(max_length=240, verbose_name="PageName")),
                (
                    "nameAndOrder",
                    models.CharField(max_length=240, verbose_name="PageName"),
                ),
                ("titles", models.TextField()),
            ],
        ),
    ]
