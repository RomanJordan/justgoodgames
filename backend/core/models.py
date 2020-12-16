from django.db import models
from django.utils import timezone
from django.utils.text import slugify
from django.urls import reverse
from django_countries.fields import CountryField
from django.contrib.auth.models import AbstractUser, UserManager
from pkg_resources import require
from tinymce.models import HTMLField
from taggit.managers import TaggableManager
from PIL import Image

class CustomUserManager(UserManager):
    def get_by_natural_key(self, username):
        case_insensitive_username_field = '{}__iexact'.format(
            self.model.USERNAME_FIELD)
        return self.get(**{case_insensitive_username_field: username})


class User(AbstractUser):
    objects = CustomUserManager()
    MALE = 'M'
    FEMALE = 'F'
    GENDER_OPTIONS = [
        ('male', 'Male'),
        ('female', 'Female'),
        ('prefer_not_to_say', 'Prefer not to say')
    ]

    email = models.EmailField(unique=True, blank=False)
    username = models.CharField(max_length=100, unique=True,
                                help_text='Required.')
    is_active = models.BooleanField(default=True)
    is_admin = models.BooleanField(default=False)
    date_joined = models.DateField(default=timezone.now)
    birthdate = models.DateField(default=timezone.now)
    slug = models.SlugField(max_length=50, null=True, blank=True)
    gender = models.CharField(
        max_length=20,
        choices=GENDER_OPTIONS,
        blank=False,
        default='')
    country = CountryField(default='US')

    USERNAME_FIELD = 'email'
    REQUIRED_FIELDS = ['username']

    def __str__(self):
        return str(self.email)

    def get_absolute_url(self):
        return f"/u/{self.username}"

    def save(self, *args, **kwargs):
        if not self.slug:
            value = self.username
            self.slug = slugify(value, allow_unicode=True)
        super().save()


class Profile(models.Model):
    user = models.OneToOneField(User, on_delete=models.CASCADE, editable=False)
    profile_image = models.ImageField(upload_to="images/profile_images",default=' images/profile_images/catcomputer.png')

    def __str__(self):
        return str(self.user.username)

    # def get_absolute_url(self):
    #     # return f"/u/{self.user__username}/"
    #     return reverse('ProfileView', args=[str(self.user__username)])


class Review(models.Model):
    title = models.CharField(max_length=100, blank=False, editable=True, default='', db_index=True)
    release_date = models.DateField(default=timezone.now)
    developer = models.CharField(max_length=100, blank=False, editable=True, default="N/A")
    genre = models.CharField(max_length=100, blank=False, editable=True, default="N/A")
    image = models.ImageField(upload_to='static/images', blank=True)
    author = models.ForeignKey('User', on_delete=models.CASCADE, primary_key=False)
    body = HTMLField()
    play_if_you_like = HTMLField()
    # rating = models.IntegerField
    slug = models.SlugField()
    tags = TaggableManager()

    def save(self, *args, **kwargs):
        if not self.slug:
            self.slug = slugify(self.title)
            super(Review, self).save(*args, **kwargs)
        else:
            super(Review, self).save(*args, **kwargs)
            # TODO CHECK IF CURRENT SLUG IS THE SAME. IMAGINE IF YOU CHANGE THE TITLE, SLUG WILL NOT UPDATE

    def __str__(self):
        return str(self.title)

    def get_absolute_url(self):
        return reverse("review", kwargs={"pk": self.pk})

    class Meta:
        verbose_name_plural = "Reviews"

class UserRecommendation(models.Model):
    name = models.CharField(max_length=100, blank=False, editable=True, default='')
    email = models.EmailField(blank=False)
    title = models.CharField(max_length=100, blank=False, editable=True, default='', db_index=True)
    link = models.URLField(blank=True, help_text="Where else can I read about the film? e.g. wikipedia, or IMDB page")
    synopsis = models.TextField(blank=False, help_text="Give a brief description of the game, in your own words.")