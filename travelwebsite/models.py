from django.db import models

# Create your models here.
class templepack(models.Model):
    packname=models.CharField(max_length=255,default="")
    packcontent=models.CharField(max_length=255,default="")
    images=models.ImageField(upload_to="images/",default="")