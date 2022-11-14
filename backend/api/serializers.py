from rest_framework import serializers
from .models import LeetCode
from .models import PageCode
from .models import PageParagraph
from .models import PageTitles


class LeetCodeSerializer(serializers.ModelSerializer):
    class Meta:
        model = LeetCode 
        fields = '__all__'

class PageCodeSerializer(serializers.ModelSerializer):
    class Meta:
        model = PageCode 
        fields = '__all__'

class PageParagraphSerializer(serializers.ModelSerializer):
    class Meta:
        model = PageParagraph 
        fields = '__all__'

class PageTitlesSerializer(serializers.ModelSerializer):
    class Meta:
        model = PageTitles 
        fields = '__all__'