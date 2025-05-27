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
import { Horario } from './horario.model';
import { Nomina } from './nomina.model';
import { Pago } from './pago.model';
import { Asistencia } from './asistencia.model';
import { Contrato } from './contrato.model';
import { Boleta } from './boleta.model';
import { Factura } from './factura.model';
import { Comprobante } from './comprobante.model';
import { ClienteNatural } from './clienteNatural.model';
import { ClienteJuridico } from './clienteJuridico.model';


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
  Talla,
  Horario,
  Nomina,
  Pago,
  Asistencia,
  Contrato,
  Boleta,
  Factura,
  Comprobante,
  ClienteNatural,
  ClienteJuridico
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
  Talla,
  Horario,
  Nomina,
  Pago,
  Asistencia,
  Contrato,
  Boleta,
  Factura,
  Comprobante,
  ClienteNatural,
  ClienteJuridico
}


export { ModelsList, ModelsDictionary };