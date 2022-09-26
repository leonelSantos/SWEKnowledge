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

@api_view(['PUT', 'DELETE'])
def leetCode_detail(request, pk):
    try:
        leetCode = LeetCode.objects.get(pk=pk)
    except LeetCode.DoesNotExist:
        return Response(status=status.HTTP_404_NOT_FOUND)

    if request.method == 'PUT':
        serializer = LeetCodeSerializer(leetCode, data=request.data,context={'request': request})
        if serializer.is_valid():
            serializer.save()
            return Response(status=status.HTTP_204_NO_CONTENT)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    elif request.method == 'DELETE':
        leetCode.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)
