from django.db import models
from django.db.models import Model
# Create your models here.




class MyModel(models.Model):
    upload = models.ImageField()

class GeeksModel(Model):
    geeks = models.ImageField()