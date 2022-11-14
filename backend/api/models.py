from unittest.util import _MAX_LENGTH
from django.db import models

# Create your models here.
class LeetCode(models.Model):
    name = models.CharField("Name", max_length=240)
    dsaType = models.CharField("DSA_Type", max_length=240)
    url = models.URLField()
    difficulty = models.CharField("Difficulty", max_length=240)
    explanation = models.TextField()
    solution = models.TextField()

    def __str__(self):
        return self.name

class PageCode(models.Model):
    order = models.PositiveSmallIntegerField()
    pageName = models.CharField("PageName", max_length=240)
    nameAndOrder = models.CharField("PageName", max_length=240)
    code = models.TextField()

    def __str__(self):
        return self.nameAndOrder

class PageParagraph(models.Model):
    order = models.PositiveSmallIntegerField()
    pageName = models.CharField("PageName", max_length=240)
    nameAndOrder = models.CharField("PageName", max_length=240)
    paragraph = models.TextField()

    def __str__(self):
        return self.nameAndOrder

class PageTitles(models.Model):
    order = models.PositiveSmallIntegerField()
    pageName = models.CharField("PageName", max_length=240)
    nameAndOrder = models.CharField("PageName", max_length=240)
    titles = models.TextField()

    def __str__(self):
        return self.nameAndOrder