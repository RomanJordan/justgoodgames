from django.views.generic import CreateView, FormView, RedirectView, ListView, DetailView, UpdateView, TemplateView
from django.shortcuts import render
from .models import Review, User, UserRecommendation
from .serializers import ReviewSerializer, RecommendationSerializer
from rest_framework import generics, status
from rest_framework.views import APIView
from rest_framework.response import Response
from django.views.generic import TemplateView
from django.http import HttpResponse
from django.contrib import messages
from rest_framework import permissions


class ReviewListCreate(generics.ListCreateAPIView):
    queryset = Review.objects.all()
    serializer_class = ReviewSerializer

class UserRecListCreate(generics.ListCreateAPIView):
    queryset = UserRecommendation.objects.all()
    serializer_class = RecommendationSerializer
    permission_classes = (permissions.AllowAny, )

class ReviewView(DetailView):
    def get_context_data(self, **kwargs):
        context = super().get_context_data(**kwargs)
        context["reviews"] = Review.objects.all()
        return context

