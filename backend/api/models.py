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