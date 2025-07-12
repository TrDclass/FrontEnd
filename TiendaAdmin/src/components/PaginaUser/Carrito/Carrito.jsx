import "./Carrito.css";
import ProductoCard from "../../ProductoCard/ProductoCard";
import { useEffect, useState } from "react";
import carritoAPI from "../../../api/carritoApi";
import { useNavigate } from "react-router-dom";

function Carrito() {
  const [carrito, setCarrito] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const cargar = async () => {
      const datos = await carritoAPI.findAll();
      setCarrito(datos);
    };
    cargar();
  }, []);

  const subtotal = carrito.reduce(
    (acc, item) => acc + item.Producto.precio * item.cantidad,
    0
  );
  const total = subtotal - 9;

  return (
    <div className="contenedor-carrito">
      <div className="carrito-titulo">
        <h2>Carro </h2>
        <h3>({carrito.length} Productos)</h3>
      </div>

      <div className="carrito-layout">
        <div className="carrito-productos">
          {carrito.map((item) => (
            <ProductoCard
              key={item.id}
              id={item.Producto.id}
              name={item.Producto.nombre}
              precio={item.Producto.precio}
              cantidad={item.cantidad}
              presentacion={item.Producto.descripcion}
              fecha_de_llegada={"Llega mañana"}
              img={item.Producto.imagen}
            />
          ))}
        </div>

        <div className="resumen-compra">
          <h3>Resumen de Compra</h3>
          <div className="resumen-detalles">
            <p className="productos">Productos ({carrito.length}) - <strong>S/ {subtotal.toFixed(2)}</strong></p>
            <p className="delivery">Delivery - <strong>GRATIS</strong></p>
            <p className="ddescuentos">Descuentos - <strong>-S/9.00</strong></p>
            <hr />
            <p className="total-pago">Total - <strong>S/ {total.toFixed(2)}</strong></p>
          </div>
          <button className="btn-continuar" onClick={() => navigate("/checkout")}>Continuar compra</button>
        </div>
      </div>
    </div>
  );
};

export default Carrito;
