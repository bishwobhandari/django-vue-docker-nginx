

from django.urls import path
from . import views
urlpatterns = [
    path('csrftoken',  views.CSRFTokenView.as_view()),

]
