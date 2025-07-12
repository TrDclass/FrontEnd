import "./PedidoCompleto.css";
import { useLocation } from "react-router-dom";
import ProductoCard from "../../ProductoCard/ProductoCard";

function PedidoCompleto() {
  const { state } = useLocation();
  const orden = state?.orden;

  if (!orden) return <p>Error: No se encontró la orden</p>;

  const productosPedido = orden.productos || [];
  const subtotal = productosPedido.reduce((acc, item) => acc + item.precio * item.cantidad, 0);
  const discount = 9.0;
  const total = subtotal - discount;

  return (
    <div className="contenedor-pedido">
      <h2>Pedido Completo</h2>
      <h3>¡Gracias por tu compra!</h3>

      <div className="pedido-layout">
        <div className="pedido-productos">
          {productosPedido.map((producto) => (
            <ProductoCard
              key={producto.id}
              id={producto.id}
              name={producto.name}
              precio={producto.precio}
              cantidad={producto.cantidad}
              presentacion={producto.presentacion}
              fecha_de_llegada={producto.fecha_de_llegada}
              img={producto.img}
            />
          ))}
        </div>

        <div className="pedido-derecha">
          <div className="resumen-pedido">
            <h3>Resumen de Pedido</h3>
            <p>
              Productos ({productosPedido.length}) - <strong>S/ {subtotal.toFixed(2)}</strong>
            </p>
            <p>Delivery - <strong>GRATIS</strong></p>
            <p>Descuentos - <strong>-S/ {discount.toFixed(2)}</strong></p>
            <hr />
            <p className="total">Total - <strong>S/ {total.toFixed(2)}</strong></p>
          </div>

          <div className="direccion-envio">
            <div className="direccion-texto">
              <h3>Dirección de envío</h3>
              <p>{orden.direccion}</p>
              <p>{orden.ciudad} - {orden.departamento}</p>
              <p>Celular de contacto: {orden.telefono}</p>
              <div className="fecha-entrega-line">
                <span>Fecha de entrega aproximada:</span>
                <span className="fecha-entrega">04/05/2025</span>
              </div>
            </div>
            <div className="direccion-imagen">
              <img src="https://yata-apix-02783514-9f5c-46f6-bb64-e0a3dd513811.s3-object.locaweb.com.br/4239e155cf10438f8db6cfcd7f05e26a.png" alt="Dirección de envío" />
            </div>
          </div>

          <button className="btn-ver-ofertas">Ver más ofertas</button>
        </div>
      </div>
    </div>
  );
}

export default PedidoCompleto;
