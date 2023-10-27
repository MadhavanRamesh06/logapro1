from django.shortcuts import render
from .models import *

# Create your views here.
def home(req):
    ob = templepack.objects.all().values()
    context = {
    'key': ob,
    }
    return render(req,"home.html",context)


def templepage(req):
    ob = templepack.objects.all().values()
    context = {
    'key': ob,
    }
    return render(req,"templepackages.html",context)

def details(req,packname):
    ob = templepack.objects.get(packname=packname)
    context = {
    'key': ob,
    }
    return render(req,"details.html",context)
def contact(req):
    ob = templepack.objects.all().values()
    context = {
    'key': ob,
    }
    return render(req,"contact.html",context)
def hourlyrental(req):
    return render(req,"ut.html")
def customizepack(req):
    return render(req,"ut.html")
def about(req):
    return render(req,"ut.html")
def tc(req):
    return render(req,"ut.html")
def faq(req):
    return render(req,"ut.html")
def recruitment(req):
    return render(req,"recruitment.html")