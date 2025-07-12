import { useEffect, useState } from "react";
import productoApi from "../../../api/productoApi";

function MasVendidos1() {
  const [productos, setProductos] = useState([]);
  const [pagina, setPagina] = useState(0);
  const porPagina = 5; // Número de productos visibles a la vez

  useEffect(() => {
    const cargarProductos = async () => {
      const data = await productoApi.findAll();
      setProductos(data);
    };
    cargarProductos();
  }, []);

  // Productos a mostrar en la página actual
  const productosPagina = productos.slice(
    pagina * porPagina,
    pagina * porPagina + porPagina
  );

  // Flechas: verificar si hay más páginas
  const puedeIrIzquierda = pagina > 0;
  const puedeIrDerecha = (pagina + 1) * porPagina < productos.length;

  return (
    <section>
      <h5>Lo más vendido</h5>
      <div className="masvendidos">
        <button
          className="flechaizquierda2"
          onClick={() => setPagina(pagina - 1)}
          disabled={!puedeIrIzquierda}
        >
          &lt;
        </button>
        <div className="ContainerProductos">
          {productosPagina.map((prod) => (
            <div key={prod.id} className="producto-card">
              <img
                src={`http://localhost:3001/uploads/productos/${prod.imagen}`}
                alt={prod.nombre}
                onError={e => { e.target.src = 'https://img.freepik.com/free-vector/glitch-error-404-page_23-2148105404.jpg'; }}
              />
              <h4>{prod.nombre}</h4>
              <p className="categoria">{prod.categoria}</p>
              <p className="precio">S/ {prod.precio}</p>
              <button className="botonagregar">AGREGAR</button>
            </div>
          ))}
        </div>
        <button
          className="flechaderecha2"
          onClick={() => setPagina(pagina + 1)}
          disabled={!puedeIrDerecha}
        >
          &gt;
        </button>
      </div>
    </section>
  );
}

export default MasVendidos1;