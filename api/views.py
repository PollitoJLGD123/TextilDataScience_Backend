from django.shortcuts import render
from rest_framework import viewsets
from .models import * # Importa todos los modelos necesarios
from .serializers import * # Asegúrate de que existan estos serializers

# ViewSets para cada modelo
class PrendaViewSet(viewsets.ModelViewSet):
    queryset = Prenda.objects.all()
    serializer_class = PrendaSerializer

class ClienteViewSet(viewsets.ModelViewSet):
    queryset = Cliente.objects.all()
    serializer_class = ClienteSerializer

class EmpleadoViewSet(viewsets.ModelViewSet):
    queryset = Empleado.objects.all()
    serializer_class = EmpleadoSerializer

class ProveedorViewSet(viewsets.ModelViewSet):
    queryset = Proveedor.objects.all()
    serializer_class = ProveedorSerializer

class CategoriaViewSet(viewsets.ModelViewSet):
    queryset = Categoria.objects.all()
    serializer_class = CategoriaSerializer

class MarcaViewSet(viewsets.ModelViewSet):
    queryset = Marca.objects.all()
    serializer_class = MarcaSerializer

class TallaViewSet(viewsets.ModelViewSet):
    queryset = Talla.objects.all()
    serializer_class = TallaSerializer

class VentaViewSet(viewsets.ModelViewSet):
    queryset = Venta.objects.all()
    serializer_class = VentaSerializer

class DetalleVentaViewSet(viewsets.ModelViewSet):
    queryset = DetalleVenta.objects.all()
    serializer_class = DetalleVentaSerializer

class PedidoProveedorViewSet(viewsets.ModelViewSet):
    queryset = PedidoProveedor.objects.all()
    serializer_class = PedidoProveedorSerializer

class DetallePedidoViewSet(viewsets.ModelViewSet):
    queryset = DetallePedido.objects.all()
    serializer_class = DetallePedidoSerializer
    
class EntradaViewSet(viewsets.ModelViewSet):
    queryset = Entrada.objects.all()
    serializer_class = EntradaSerializer

class DetalleEntradaViewSet(viewsets.ModelViewSet):
    queryset = DetalleEntrada.objects.all()
    serializer_class = DetalleEntradaSerializer

class UserViewSet(viewsets.ModelViewSet):
    queryset = User.objects.all()
    serializer_class = UserSerializer

class RolViewSet(viewsets.ModelViewSet):
    queryset = Rol.objects.all()
    serializer_class = RolSerializer