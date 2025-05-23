from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .views import ProductoViewSet, ClienteViewSet, EmpleadoViewSet, AsistenciaViewSet

router = DefaultRouter()
router.register(r'productos', ProductoViewSet)
router.register(r'clientes', ClienteViewSet)
router.register(r'empleados', EmpleadoViewSet)
router.register(r'asistencias', AsistenciaViewSet)

urlpatterns = router.urls
