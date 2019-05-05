from django import forms
from .models import Post
from wow.choices import *

class PostForm(forms.ModelForm):
    
    category = forms.ChoiceField(choices=STATUS_CHOICES)


    class Meta :
        model = Post

        fields = {'title', 'body', 'image', 'category',}
