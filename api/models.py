from django.db import models

class User(models.Model):
    id_user = models.AutoField(primary_key=True)
    nombre = models.CharField(max_length=50)
    email = models.TextField()
    password = models.CharField(max_length=255)
    token = models.TextField(blank=True, null=True)

class Rol(models.Model):
    id_rol = models.AutoField(primary_key=True)
    nombre = models.CharField(max_length=50)

class Empleado(models.Model):
    id_empleado = models.AutoField(primary_key=True)
    nombre = models.CharField(max_length=50)
    apellido = models.CharField(max_length=50)
    email = models.TextField()
    telefono = models.CharField(max_length=9)
    direccion = models.CharField(max_length=100)
    dni = models.CharField(max_length=8)
    imagen_perfil = models.TextField(blank=True, null=True)
    imagen_perfil_url = models.TextField(blank=True, null=True)
    id_user = models.OneToOneField(User, on_delete=models.CASCADE, db_column='id_user', related_name='empleado')
    id_rol = models.ForeignKey(Rol, on_delete=models.CASCADE, db_column='id_rol', related_name='empleados')

class Cliente(models.Model):
    id_cliente = models.AutoField(primary_key=True)
    nombre = models.CharField(max_length=50)
    apellido = models.CharField(max_length=50)
    email = models.TextField()
    telefono = models.CharField(max_length=9)
    direccion = models.CharField(max_length=100)
    dni = models.CharField(max_length=8)

class Categoria(models.Model):
    id_categoria = models.AutoField(primary_key=True)
    nombre = models.CharField(max_length=50)

class Proveedor(models.Model):
    id_proveedor = models.AutoField(primary_key=True)
    nombre = models.CharField(max_length=50)
    apellido = models.CharField(max_length=50)
    email = models.TextField()
    telefono = models.CharField(max_length=9)
    direccion = models.CharField(max_length=100, blank=True, null=True)
    dni = models.CharField(max_length=8)

class Talla(models.Model):
    id_talla = models.AutoField(primary_key=True)
    nombre_talla = models.CharField(max_length=50)
    descripcion = models.CharField(max_length=255)

class Marca(models.Model):
    id_marca = models.AutoField(primary_key=True)
    nombre = models.CharField(max_length=50)

class Prenda(models.Model):
    id_prenda = models.AutoField(primary_key=True)
    nombre = models.CharField(max_length=50)
    descripcion = models.CharField(max_length=255)
    color = models.CharField(max_length=255)
    precio = models.DecimalField(max_digits=18, decimal_places=2)
    stock = models.IntegerField()
    id_marca = models.ForeignKey(Marca, on_delete=models.CASCADE, db_column='id_marca', related_name='prendas')
    id_categoria = models.ForeignKey(Categoria, on_delete=models.CASCADE, db_column='id_categoria', related_name='prendas')
    id_talla = models.ForeignKey(Talla, on_delete=models.CASCADE, db_column='id_talla', related_name='prendas')
    id_proveedor = models.ForeignKey(Proveedor, on_delete=models.CASCADE, db_column='id_proveedor', related_name='prendas')

class Entrada(models.Model):
    id_entrada = models.AutoField(primary_key=True)
    fecha_entrada = models.DateTimeField()
    id_proveedor = models.ForeignKey(Proveedor, on_delete=models.CASCADE, db_column='id_proveedor', related_name='entradas')

class DetalleEntrada(models.Model):
    id_detalle_entrada = models.AutoField(primary_key=True)
    cantidad = models.IntegerField()
    precio_compra = models.DecimalField(max_digits=18, decimal_places=2)
    id_entrada = models.ForeignKey(Entrada, on_delete=models.CASCADE, db_column='id_entrada', related_name='detalles_entradas')
    id_prenda = models.ForeignKey(Prenda, on_delete=models.CASCADE, db_column='id_prenda', related_name='detalles_entradas')

class Venta(models.Model):
    id_venta = models.AutoField(primary_key=True)
    fecha_venta = models.DateTimeField()
    direccion_venta = models.CharField(max_length=100)
    total = models.DecimalField(max_digits=18, decimal_places=2, default=0)
    metodo_pago = models.CharField(max_length=50)
    id_cliente = models.ForeignKey(Cliente, on_delete=models.CASCADE, db_column='id_cliente', related_name='ventas')

class DetalleVenta(models.Model):
    id_detalle_venta = models.AutoField(primary_key=True)
    cantidad = models.IntegerField()
    precio_venta_real = models.DecimalField(max_digits=18, decimal_places=2)
    id_prenda = models.ForeignKey(Prenda, on_delete=models.CASCADE, db_column='id_prenda', related_name='detalles_ventas')
    id_venta = models.ForeignKey(Venta, on_delete=models.CASCADE, db_column='id_venta', related_name='detalles_ventas')

class PedidoProveedor(models.Model):
    id_pedido_proveedor = models.AutoField(primary_key=True)
    fecha_pedido = models.DateTimeField()
    id_proveedor = models.ForeignKey(Proveedor, on_delete=models.CASCADE, db_column='id_proveedor', related_name='pedidos_proveedor')
    estado = models.CharField(max_length=50)  # Texto libre, sin choices
    
class DetallePedido(models.Model):
    id_detalle_pedido = models.AutoField(primary_key=True)
    cantidad = models.IntegerField()
    id_pedido_proveedor = models.ForeignKey(PedidoProveedor, on_delete=models.CASCADE, db_column='id_pedido_proveedor', related_name='detalles_pedidos')
    id_prenda = models.ForeignKey(Prenda, on_delete=models.CASCADE, db_column='id_prenda', related_name='detalles_pedidos')
