from rest_framework import serializers
from .models import LeetCode

class LeetCodeSerializer(serializers.ModelSerializer):

    class Meta:
        model = LeetCode 
        fields = ('name', 'description', 'solution')