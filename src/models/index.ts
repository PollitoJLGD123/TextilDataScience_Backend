import { User } from './user.model';
import { Proveedor } from './proveedor.model';
import { Entrada } from './entrada.model';
import { Prenda } from './prenda.model';
import { Marca } from './marca.model';
import { Categoria } from './categoria.model';
import { Empleado } from './empleado.model';
import { Cliente } from './cliente.model';
import { Venta } from './venta.model';
import { DetalleVenta } from './detalleVenta.model';
import { DetalleEntrada } from './detalleEntrada.model';
import { ReclamacionPedido } from './reclamacionPedido.model';
import { PedidoProveedor } from './pedidoProveedor.model';
import { DetallePedido } from './detallePedido.model';
import { Rol } from './rol.model';
import { Talla } from './talla.model';

const ModelsList = [
  User,
  Proveedor,
  Entrada,
  Prenda,
  Marca,
  Categoria,
  Empleado,
  Cliente,
  Venta,
  DetalleVenta,
  ReclamacionPedido,
  PedidoProveedor,
  DetallePedido,
  DetalleEntrada,
  Rol,
  Talla
]

const ModelsDictionary =  {
  User,
  Proveedor,
  Entrada,
  Prenda,
  Marca,
  Categoria,
  Empleado,
  Cliente,
  Venta,
  DetalleVenta,
  ReclamacionPedido,
  PedidoProveedor,
  DetallePedido,
  DetalleEntrada,
  Rol,
  Talla
}


export { ModelsList, ModelsDictionary };