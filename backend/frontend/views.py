from django.shortcuts import render
from rest_framework.response import Response
from rest_framework.decorators import api_view
from rest_framework import status

from .models import LeetCode
from .serializers import *

# Create your views here.
def index(request):
    return render(request, 'build/index.html')


@api_view(['GET', 'POST'])
def leetCode_list(request):
    if request.method == 'GET':
        data = LeetCode.objects.all()

        serializer = LeetCodeSerializer(data, context={'request': request}, many=True)

        return Response(serializer.data)

    elif request.method == 'POST':
        serializer = LeetCodeSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(status=status.HTTP_201_CREATED)

        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

@api_view(['GET'])
def filterByID(request, pk):
    if request.method == 'GET':
        leetCode = LeetCode.objects.filter(id = pk)
        serializer = LeetCodeSerializer(leetCode, context={'id': pk}, many=True)
        return Response(serializer.data)

@api_view(['GET'])
def filterByDSA(request, dsa):
    if request.method == 'GET':
        leetCode = LeetCode.objects.filter(dsaType = dsa)
        serializer = LeetCodeSerializer(leetCode, context={'dsaType': dsa}, many=True)
        return Response(serializer.data)

@api_view(['GET'])
def filterByDifficulty(request, diff):
    if request.method == 'GET':
        leetCode = LeetCode.objects.filter(difficulty = diff)
        serializer = LeetCodeSerializer(leetCode, context={'difficulty': diff}, many=True)
        return Response(serializer.data)