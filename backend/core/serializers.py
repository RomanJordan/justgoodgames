from rest_framework import serializers
from .models import Review, UserRecommendation

class ReviewSerializer(serializers.ModelSerializer):
    class Meta:
        model = Review
        image = serializers.ImageField(
            max_length=None, use_url=True
        )
        fields = ('id', 'title', 'release_date','developer', 'author', 'body', 'image', 'play_if_you_like')
        
    def get_image_url(self, obj):
        return obj.image.url

class RecommendationSerializer(serializers.ModelSerializer):
    class Meta:
        model = UserRecommendation
        fields = ('id','name', 'email', 'title', 'link', 'synopsis')
