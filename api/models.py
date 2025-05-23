from django.db import models


class Producto(models.Model):
    nombre = models.CharField(max_length=100)
    precio = models.FloatField()
    stock = models.IntegerField()
    
    def __str__(self):
        return self.nombre
    

class Cliente(models.Model):
    nombre = models.CharField(max_length=100)
    apellido = models.CharField(max_length=100)
    direccion = models.CharField(max_length=100)
    telefono = models.CharField(max_length=100)
    email = models.EmailField()
    dni = models.CharField(max_length=8)
    fecha_nacimiento = models.DateField()
    
    def __str__(self):
        return self.nombre

class Empleado(models.Model):
    nombre = models.CharField(max_length=100)
    apellido = models.CharField(max_length=100)
    direccion = models.CharField(max_length=150)
    telefono = models.CharField(max_length=50)
    email = models.EmailField(unique=True, max_length=191)
    dni = models.CharField(max_length=8, unique=True)
    fecha_nacimiento = models.DateField()
    
    cargo = models.CharField(max_length=100)       # Ejemplo: Cajero, Vendedor, Gerente
    area = models.CharField(max_length=50)        # Ejemplo: Ventas, Inventario, Administración
    turno = models.CharField(max_length=50)        # Ejemplo: Matutino, Vespertino, Nocturno
    horario = models.CharField(max_length=100)     # Descripción o rango horario
    
    usuario = models.CharField(max_length=191, unique=True)  # Usuario para acceso
    contraseña = models.CharField(max_length=128)           # Ideal usar hashed (pero aquí campo simple)
    
    def __str__(self):
        return f"{self.nombre} {self.apellido} - {self.cargo}"

class Asistencia(models.Model):
    empleado = models.ForeignKey(Empleado, on_delete=models.CASCADE, related_name='asistencias')
    fecha = models.DateField()
    hora_entrada = models.TimeField(null=True, blank=True)
    hora_salida = models.TimeField(null=True, blank=True)
    observaciones = models.TextField(blank=True)
    
    def __str__(self):
        return f"Asistencia de {self.empleado} en {self.fecha}"
