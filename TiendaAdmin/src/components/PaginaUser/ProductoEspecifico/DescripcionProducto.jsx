import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import productoApi from '../../../api/productoApi';

function DescripcionProducto() {
  const { id } = useParams();
  const [producto, setProducto] = useState(null);

  useEffect(() => {
    productoApi.findOne(id).then(setProducto);
  }, [id]);

  if (!producto) return <div>Cargando...</div>;

  return (
    <section className="descripcion-producto-main">
      <div className="breadcrumb">
        <span><b>Supermercado</b> &gt; <b>{producto.categoria}</b></span>
      </div>
      <div className="descripcion-producto-card">
        <div className="desc-prod-img">
          <img
            src={`http://localhost:3001/uploads/productos/${producto.imagen}`}
            alt={producto.nombre}
            style={{ maxWidth: 300 }}
          />
        </div>
        <div className="desc-prod-info">
          <h2>{producto.nombre}</h2>
          <hr />
          <h3>{producto.descripcion}</h3>
          {/* Puedes mostrar presentación si tienes el dato */}
          <div className="desc-prod-bottom">
            <span className="desc-prod-precio">S/ {producto.precio}</span>
            <button className="desc-prod-agregar">
              <span className="icon-cart" style={{marginRight: '8px'}}>🛒</span>
              AGREGAR
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default DescripcionProducto;
