from rest_framework import serializers
from .models import Review

class ReviewSerializer(serializers.ModelSerializer):
    class Meta:
        model = Review
        image = serializers.ImageField(
            max_length=None, use_url=True
        )
        fields = ('id', 'title', 'release_date','developer', 'author', 'body', 'image')
        
    def get_image_url(self, obj):
        return obj.image.url