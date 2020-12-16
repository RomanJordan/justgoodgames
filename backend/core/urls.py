from django.urls import path
from . import views

urlpatterns = [
    path('api/reviews/', views.ReviewListCreate.as_view()),
    path('api/recs/', views.UserRecListCreate.as_view()),
    # path('review/<str:title>/', views.ReviewView.as_view())
]