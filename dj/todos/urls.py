from django.conf.urls import include, url
from django.http import HttpResponse
from . import views
from todos.models import Todo
from rest_framework import routers, serializers, viewsets
from rest_framework.decorators import list_route
from django.views.decorators.csrf import csrf_exempt
from rest_framework.authentication import SessionAuthentication 


class CsrfExemptSessionAuthentication(SessionAuthentication):
    def enforce_csrf(self, request):
        return  # To not perform the csrf check previously happening


# Serializers define the API representation.
class TodoSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = Todo
        fields = ('id', 'title', 'time', 'done')

# ViewSets define the view behavior.
# @csrf_exempt
class TodoViewSet(viewsets.ModelViewSet):
    authentication_classes = [CsrfExemptSessionAuthentication]

    queryset = Todo.objects.all()
    serializer_class = TodoSerializer
    
    @list_route(methods=['delete'])
    def remove_all(self, request):
        todos = Todo.objects.all()
        todos.delete()
        return HttpResponse(status=200)

# Routers provide an easy way of automatically determining the URL conf.
router = routers.DefaultRouter()
router.register(r'todos', TodoViewSet)

urlpatterns = [
#    url(r'^$', views.index, name='index'),
    url(r'^', include(router.urls)),
]