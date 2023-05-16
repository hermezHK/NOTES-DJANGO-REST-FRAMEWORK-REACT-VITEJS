from django.db import models

class Tasks(models.Model):
    title = models.CharField(max_length=100)
    description = models.TextField(blank=True)
    done = models.BooleanField(default=False)

    def __str__(self) -> str:
        return self.title

