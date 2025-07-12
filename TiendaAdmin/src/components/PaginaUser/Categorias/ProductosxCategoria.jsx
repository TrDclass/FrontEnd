import { useLocation } from "react-router-dom";
import productoApi from '../../../api/productoApi'
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import ListaCategoriaApi from '../../../api/ListaCategoriaApi'
import carritoApi from '../../../api/carritoApi';


function ProductosxCategoria() {
  const [productos, setProductos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [categorias, setCategorias] = useState([]);
  const [orden, setOrden] = useState('nombre-asc'); // NUEVO: estado para orden
  const [categoriaSeleccionada, setCategoriaSeleccionada] = useState(null);


  // Para búsqueda        
  const location = useLocation();
  const params = new URLSearchParams(location.search);
  const query = params.get('q')?.toLowerCase() || "";

  const navigate = useNavigate();

  //Cargar Categorias
  useEffect(() => {
    const cargar = async () => {    
      setLoading(true);
      const [productosData, categoriasData] = await Promise.all([
        productoApi.findAll(),
        ListaCategoriaApi.findAll()
      ]);
      setProductos(productosData);
      setCategorias(categoriasData);
      setLoading(false);
    };
    cargar();
  }, []);


  // Cargar productos desde el backend
  useEffect(() => {
    const cargar = async () => {
      setLoading(true);
      const data = await productoApi.findAll();
      setProductos(data);
      setLoading(false);
    };
    cargar();
  }, []);


  // 👉 FUNCIÓN para agregar al carrito
  const agregarAlCarrito = async (productoId) => {
    try {
      const existente = await carritoApi.findOne(productoId);
      if (existente) {
        await carritoApi.update({
          id: existente.id,
          cantidad: existente.cantidad + 1,
        });
      } else {
        await carritoApi.create({
          producto_id: productoId,
          cantidad: 1,
        });
      }
      alert("Producto agregado al carrito");
    } catch (error) {
      console.error("Error al agregar al carrito", error);
      alert("Ocurrió un error al agregar el producto.");
    }
  };



  // Filtro por búsqueda (opcional)
  const productosFiltrados = productos.filter(p => {
  const coincideBusqueda = !query || 
    p.nombre.toLowerCase().includes(query) || 
    p.categoria.toLowerCase().includes(query);
  const coincideCategoria = !categoriaSeleccionada || 
    p.categoria.toLowerCase() === categoriaSeleccionada.toLowerCase();
  return coincideBusqueda && coincideCategoria;
  });

  // Ordenar productos según selección
  const productosOrdenados = [...productosFiltrados].sort((a, b) => { 
    if (orden === 'nombre-asc') return a.nombre.localeCompare(b.nombre);
    if (orden === 'nombre-desc') return b.nombre.localeCompare(a.nombre);
    if (orden === 'precio-asc') return a.precio - b.precio;
    if (orden === 'precio-desc') return b.precio - a.precio;
    return 0;
  });

  if (loading) return <div>Cargando productos...</div>;

  return (
    <section className="contenedor-categorias-productos">
      <nav className="menu-lateral">
        <ul>
          <li
            key="todas"
            className={!categoriaSeleccionada ? "activo" : ""}
            style={{ cursor: 'pointer' }}
            onClick={() => setCategoriaSeleccionada(null)}
          >
            Todas
          </li>
          {categorias.map((cat) => (
            <li
              key={cat.id}
              className={categoriaSeleccionada === cat.nombre ? "activo" : ""}
              style={{ cursor: 'pointer' }}
              onClick={() => setCategoriaSeleccionada(cat.nombre)}
             >
              {cat.nombre}
            </li>
          ))}
        </ul>
      </nav>
      <div className="main-productos">
        <div style={{ marginBottom: 16 }}>
          <label>Ordenar por: </label>
          <select value={orden} onChange={e => setOrden(e.target.value)}>
            <option value="nombre-asc">Nombre A-Z</option>
            <option value="nombre-desc">Nombre Z-A</option>
            <option value="precio-asc">Precio Menor a Mayor</option>
            <option value="precio-desc">Precio Mayor a Menor</option>
          </select>
        </div>
        <div className="productos-grid">
          {productosOrdenados.length === 0
            ? <p>No se encontraron productos.</p>
            : productosOrdenados.map((prod) => (
              <div key={prod.id} className="producto-card">
                <img
                  src={`http://localhost:3001/uploads/productos/${prod.imagen}`}
                  alt={prod.nombre}
                  style={{ cursor: 'pointer' }}
                  onClick={() => navigate(`/productos/${prod.id}`)}
                  onError={e => { e.target.src = 'https://img.freepik.com/free-vector/glitch-error-404-page_23-2148105404.jpg' }}
                />  
                <h4>{prod.nombre}</h4>
                <p className="categoria">{prod.categoria}</p>
                <p className="precio">S/ {prod.precio}</p>
                <button
                  className="boton-agregar"
                  onClick={() => agregarAlCarrito(prod.id)}
                >
                  AGREGAR 
                </button>
              </div>
            ))
          }
        </div>
        <div className="indice">  
          <button className="indicebtn">
            <span>&lt;</span>
          </button>
          <button className="indicebtn active">1</button>
          <button className="indicebtn">2</button>
          <button className="indicebtn">3</button>
          <span className="pag-dots">...</span>
          <button className="indicebtn">10</button>
          <button className="indicebtn">
            <span>&gt;</span>
          </button>
        </div>
      </div>
    </section>
  );
}

export default ProductosxCategoria;