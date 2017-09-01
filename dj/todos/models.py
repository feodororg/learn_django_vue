from django.db import models

# Create your models here.



class Todo(models.Model):
    title = models.CharField(max_length=200)
    done = models.BooleanField(default=False)
    time = models.TimeField(blank=True, null=True)