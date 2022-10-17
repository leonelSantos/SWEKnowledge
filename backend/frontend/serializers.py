from rest_framework import serializers
from .models import LeetCode

class LeetCodeSerializer(serializers.ModelSerializer):

    class Meta:
        model = LeetCode 
        fields = ('name', 
                    'url', 
                    'dsaType', 
                    'difficulty', 
                    'explanation', 
                    'solution' )