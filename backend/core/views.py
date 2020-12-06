from django.views.generic import CreateView, FormView, RedirectView, ListView, DetailView, UpdateView, TemplateView
from django.shortcuts import render
from .models import Review
from .serializers import ReviewSerializer
from rest_framework import generics
from django.views.generic import TemplateView


class ReviewListCreate(generics.ListCreateAPIView):
    queryset = Review.objects.all()
    serializer_class = ReviewSerializer

class ReviewView(DetailView):
    def get_context_data(self, **kwargs):
        context = super().get_context_data(**kwargs)
        context["reviews"] = Review.objects.all()
        return context