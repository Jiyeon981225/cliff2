from django.shortcuts import render, redirect
from .models import Post
from django.utils import timezone
from .forms import PostForm
from django.shortcuts import get_object_or_404

# Create your views here.


def home(request) :
    posts = Post.objects.all
    
    if request.method =='POST':
        form = PostForm(request.POST, request.FILES)
        if form.is_valid() :
            post=form.save(commit=False)
            post.author = request.user
            post.published_date = timezone.now()
            post.writer = request.user
            catetory = request.POST.getlist('category')
            post.save()
            return redirect('home')
    else:
        form = PostForm()    
    
    
    return render(request, 'wow/home.html', {'posts_list': posts, 'form':form})



    
def post_detail(request,index):
    post= get_object_or_404(Post, pk=index)
    return render(request, 'wow/post_detail.html', {'post':post})
    
    
def post_edit(request, index):
    post = get_object_or_404(Post, pk=index)
    if request.method=='POST':
        form=PostForm(request.POST, request.FILES, instance=post)
        if form.is_valid():
            post = form.save(commit=False)
            post.author=request.user
            post.pub_date=timezone.now()
            catetory = request.POST.getlist('category')
            post.save()
            return redirect('post_detail', index=post.pk)
    else:
        form = PostForm(instance=post)
    return render(request, 'wow/post_edit.html', {'form':form})


def post_remove(request, pk) :
    post = get_object_or_404(Post, pk=pk)
    post.delete()
    return redirect('home')


    
    
def java(request):
    posts = Post.objects.all
    
    if request.method =='POST':
        form = PostForm(request.POST, request.FILES)
        if form.is_valid() :
            post=form.save(commit=False)
            post.author = request.user
            post.published_date = timezone.now()
            post.writer = request.user
            catetory = request.POST.getlist('category')
            post.save()
            return redirect('home')
    else:
        form = PostForm()    
    
    
    return render(request, 'wow/js.html', {'posts_list': posts, 'form':form})