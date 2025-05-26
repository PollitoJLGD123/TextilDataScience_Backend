from rest_framework import serializers
from .models import (
    User, Rol, Empleado, Cliente, Categoria, Proveedor,
    Talla, Marca, Prenda, Entrada, DetalleEntrada,
    Venta, DetalleVenta, PedidoProveedor, DetallePedido,
    ReclamacionPedido
)

class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = '__all__'
        extra_kwargs = {'password': {'write_only': True}}

class RolSerializer(serializers.ModelSerializer):
    class Meta:
        model = Rol
        fields = '__all__'

class EmpleadoSerializer(serializers.ModelSerializer):
    user = UserSerializer(read_only=True)
    rol = RolSerializer(read_only=True)
    
    class Meta:
        model = Empleado
        fields = '__all__'

class ClienteSerializer(serializers.ModelSerializer):
    class Meta:
        model = Cliente
        fields = '__all__'

class CategoriaSerializer(serializers.ModelSerializer):
    class Meta:
        model = Categoria
        fields = '__all__'

class ProveedorSerializer(serializers.ModelSerializer):
    class Meta:
        model = Proveedor
        fields = '__all__'

class TallaSerializer(serializers.ModelSerializer):
    class Meta:
        model = Talla
        fields = '__all__'

class MarcaSerializer(serializers.ModelSerializer):
    class Meta:
        model = Marca
        fields = '__all__'

class PrendaSerializer(serializers.ModelSerializer):
    marca = MarcaSerializer(read_only=True)
    categoria = CategoriaSerializer(read_only=True)
    talla = TallaSerializer(read_only=True)
    proveedor = ProveedorSerializer(read_only=True)
    
    # Campos para relaciones (opcional, si quieres permitir escritura)
    marca_id = serializers.PrimaryKeyRelatedField(queryset=Marca.objects.all(), source='marca', write_only=True)
    categoria_id = serializers.PrimaryKeyRelatedField(queryset=Categoria.objects.all(), source='categoria', write_only=True)
    talla_id = serializers.PrimaryKeyRelatedField(queryset=Talla.objects.all(), source='talla', write_only=True)
    proveedor_id = serializers.PrimaryKeyRelatedField(queryset=Proveedor.objects.all(), source='proveedor', write_only=True)
    
    class Meta:
        model = Prenda
        fields = '__all__'

class EntradaSerializer(serializers.ModelSerializer):
    proveedor = ProveedorSerializer(read_only=True)
    proveedor_id = serializers.PrimaryKeyRelatedField(queryset=Proveedor.objects.all(), source='proveedor', write_only=True)
    
    class Meta:
        model = Entrada
        fields = '__all__'

class DetalleEntradaSerializer(serializers.ModelSerializer):
    entrada = EntradaSerializer(read_only=True)
    prenda = PrendaSerializer(read_only=True)
    
    entrada_id = serializers.PrimaryKeyRelatedField(queryset=Entrada.objects.all(), source='entrada', write_only=True)
    prenda_id = serializers.PrimaryKeyRelatedField(queryset=Prenda.objects.all(), source='prenda', write_only=True)
    
    class Meta:
        model = DetalleEntrada
        fields = '__all__'

class VentaSerializer(serializers.ModelSerializer):
    cliente = ClienteSerializer(read_only=True)
    cliente_id = serializers.PrimaryKeyRelatedField(queryset=Cliente.objects.all(), source='cliente', write_only=True)
    
    class Meta:
        model = Venta
        fields = '__all__'

class DetalleVentaSerializer(serializers.ModelSerializer):
    venta = VentaSerializer(read_only=True)
    prenda = PrendaSerializer(read_only=True)
    
    venta_id = serializers.PrimaryKeyRelatedField(queryset=Venta.objects.all(), source='venta', write_only=True)
    prenda_id = serializers.PrimaryKeyRelatedField(queryset=Prenda.objects.all(), source='prenda', write_only=True)
    
    class Meta:
        model = DetalleVenta
        fields = '__all__'

class PedidoProveedorSerializer(serializers.ModelSerializer):
    proveedor = ProveedorSerializer(read_only=True)
    proveedor_id = serializers.PrimaryKeyRelatedField(queryset=Proveedor.objects.all(), source='proveedor', write_only=True)
    
    class Meta:
        model = PedidoProveedor
        fields = '__all__'

class DetallePedidoSerializer(serializers.ModelSerializer):
    pedido_proveedor = PedidoProveedorSerializer(read_only=True)
    prenda = PrendaSerializer(read_only=True)
    
    pedido_proveedor_id = serializers.PrimaryKeyRelatedField(queryset=PedidoProveedor.objects.all(), source='pedido_proveedor', write_only=True)
    prenda_id = serializers.PrimaryKeyRelatedField(queryset=Prenda.objects.all(), source='prenda', write_only=True)
    
    class Meta:
        model = DetallePedido
        fields = '__all__'
        

class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ['id_user', 'nombre', 'email', 'token']  # Excluimos password por seguridad
        extra_kwargs = {
            'password': {'write_only': True}  # La contraseña solo para escritura
        }

class RolSerializer(serializers.ModelSerializer):
    class Meta:
        model = Rol
        fields = '__all__'

class ReclamacionPedidoSerializer(serializers.ModelSerializer):
    class Meta:
        model = ReclamacionPedido
        fields = '__all__'