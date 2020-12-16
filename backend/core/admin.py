from django.contrib import admin
from .models import User, Profile, Review, UserRecommendation

# Register your models here.
class UserAdmin(admin.ModelAdmin):
    readonly_fields = ('slug',)

class ProfileAdmin(admin.ModelAdmin):
    readonly_fields = ('user',)

class ReviewAdmin(admin.ModelAdmin):
    # fields = ('author',)
    readonly_fields = ('slug',)

admin.site.register(User, UserAdmin)
admin.site.register(Profile, ProfileAdmin)
admin.site.register(Review, ReviewAdmin)
admin.site.register(UserRecommendation)