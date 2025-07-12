import "./Checkout.css";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import ordenAPI from "../../../api/ordenApi";
import carritoAPI from "../../../api/carritoApi";

function Checkout() {
  const navigate = useNavigate();
  const [carrito, setCarrito] = useState([]);
  const [total, setTotal] = useState(0);

  useEffect(() => {
    const obtenerCarrito = async () => {
      const datos = await carritoAPI.findAll();
      setCarrito(datos);

      const subtotal = datos.reduce(
        (acc, item) => acc + item.Producto.precio * item.cantidad,
        0
      );
      const descuento = 9;
      setTotal(subtotal - descuento);
    };

    obtenerCarrito();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = e.target;

    const productos = carrito.map((item) => ({
      id: item.Producto.id,
      name: item.Producto.nombre,
      precio: item.Producto.precio,
      cantidad: item.cantidad,
      presentacion: item.Producto.descripcion,
      fecha_de_llegada: "Llega mañana",
      img: item.Producto.imagen,
    }));

    const nuevaOrden = {
      nombre: form.nombre.value,
      apellido: form.apellido.value,
      ciudad: form.ciudad.value,
      departamento: form.departamento.value,
      direccion: form.direccion.value,
      codigo_postal: form.codigo_postal.value,
      telefono: form.telefono.value,
      metodo_pago: form.metodo_pago.value,
      metodo_envio: form.metodo_envio.value,
      total: total,
      productos, // 👈 añadimos productos reales
    };

    const resultado = await ordenAPI.create(nuevaOrden);
    await carritoAPI.vaciar(); // 👈 vacía el carrito luego de guardar la orden
    navigate("/pedido-completo", { state: { orden: resultado } });
  };

  return (
    <div className="contenedor-checkout">
      <div className="checkout-titulo">
        <h1>Checkout</h1>
      </div>
      <form className="checkout-layout" onSubmit={handleSubmit}>
        <div className="checkout-form">
          <h2>Dirección de envío</h2>

          <div className="form-group">
            <label>Nombre</label>
            <input name="nombre" type="text" required />
          </div>
          <div className="form-group">
            <label>Apellido</label>
            <input name="apellido" type="text" required />
          </div>
          <div className="form-group">
            <label>Ciudad</label>
            <input name="ciudad" type="text" required />
          </div>
          <div className="form-group">
            <label>Departamento</label>
            <input name="departamento" type="text" required />
          </div>
          <div className="form-group">
            <label>Dirección</label>
            <input name="direccion" type="text" required />
          </div>
          <div className="form-group">
            <label>Código postal</label>
            <input name="codigo_postal" type="text" required />
          </div>
          <div className="form-group">
            <label>Teléfono de contacto</label>
            <input name="telefono" type="text" required />
          </div>
          <div className="form-group">
            <label>Método de pago</label>
            <select name="metodo_pago" required>
              <option value="QR">Código QR</option>
              <option value="Tarjeta">Tarjeta de crédito</option>
            </select>
          </div>
          <div className="form-group">
            <label>Método de envío</label>
            <select name="metodo_envio" required>
              <option value="Delivery">Delivery</option>
              <option value="Recojo">Recojo en tienda</option>
            </select>
          </div>

          <button className="btn-pago" type="submit">Completar orden</button>
        </div>

        <div className="checkout-resumen">
          <h2>Resumen de compra</h2>
          <div className="resumen-detalles">
            <p className="productos">
              Productos ({carrito.length}) - <strong>S/ {total + 9}</strong>
            </p>
            <p className="delivery">Delivery - <strong>GRATIS</strong></p>
            <p className="descuentos">Descuentos - <strong>-S/9.00</strong></p>
            <hr />
            <p className="total-pago">Total - <strong>S/ {total.toFixed(2)}</strong></p>
          </div>
        </div>
      </form>
    </div>
  );
}

export default Checkout;
