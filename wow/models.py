from __future__ import unicode_literals

from django.db import models

from django.utils import timezone

from wow.choices import *
# Create your models here.


class Post(models.Model):
    title = models.CharField(max_length=200)
    body = models.TextField(default=' ')
    pub_date = models.DateTimeField(default=timezone.now)
    writer = models.TextField(default=' ')
    image = models.ImageField(upload_to='images/', blank=True)
    category = models.CharField(max_length=200, default="public")
