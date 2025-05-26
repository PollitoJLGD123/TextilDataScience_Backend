from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .views import (
    PrendaViewSet, 
    ClienteViewSet, 
    EmpleadoViewSet,
    ProveedorViewSet,
    CategoriaViewSet,
    MarcaViewSet,
    TallaViewSet,
    VentaViewSet,
    DetalleVentaViewSet,
    PedidoProveedorViewSet,
    DetallePedidoViewSet,
    EntradaViewSet,
    DetalleEntradaViewSet,
    UserViewSet,
    RolViewSet,
    ReclamacionPedidoViewSet
)

router = DefaultRouter()

# Registra todos los ViewSets
router.register(r'prendas', PrendaViewSet)
router.register(r'clientes', ClienteViewSet)
router.register(r'empleados', EmpleadoViewSet)
router.register(r'proveedores', ProveedorViewSet)
router.register(r'categorias', CategoriaViewSet)
router.register(r'marcas', MarcaViewSet)
router.register(r'tallas', TallaViewSet)
router.register(r'ventas', VentaViewSet)
router.register(r'detalles-venta', DetalleVentaViewSet)
router.register(r'pedidos-proveedor', PedidoProveedorViewSet)
router.register(r'detalles-pedido', DetallePedidoViewSet)
router.register(r'entradas', EntradaViewSet)
router.register(r'detalles-entrada', DetalleEntradaViewSet)
router.register(r'usuarios', UserViewSet)
router.register(r'roles', RolViewSet)
router.register(r"reclamaciones-pedidos", ReclamacionPedidoViewSet)

urlpatterns = [
    path('api/', include(router.urls)),
    
    # Puedes agregar otras rutas manuales aquí si necesitas
    # path('api/custom-endpoint/', custom_view, name='custom-view'),
]