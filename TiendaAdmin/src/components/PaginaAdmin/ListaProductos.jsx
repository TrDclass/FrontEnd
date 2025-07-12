import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import productoApi from '../../api/productoApi';

function ListaProductos() {
  const navigate = useNavigate();
  const [productos, setProductos] = useState([]);
  const [busqueda, setBusqueda] = useState('');
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const cargarProductos = async () => {
      try {
        const data = await productoApi.findAll();
        setProductos(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };
    cargarProductos();
  }, []);

  const handleEliminar = async (id) => {
    if (window.confirm('¿Estás seguro de eliminar este producto?')) {
      try {
        await productoApi.remove(id);
        setProductos(productos.filter(p => p.id !== id));
      } catch (err) {
        setError(err.message);
      }
    }
  };

  const getImageUrl = (imagen) => `http://localhost:3001/uploads/productos/${imagen}`;

  // Filtrar productos por ID (si es número) o por nombre
  const productosFiltrados = productos.filter(producto => {
    const textoBusqueda = busqueda.toLowerCase().trim();
    if (!textoBusqueda) return true;
    if (!isNaN(textoBusqueda)) {
      return producto.id.toString().includes(textoBusqueda);
    }
    return producto.nombre.toLowerCase().includes(textoBusqueda);
  });

  if (loading) return <div className="admin-container">Cargando...</div>;
  if (error) return <div className="admin-container">Error: {error}</div>;

  return (
    <div className="admin-container">
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <h1>Lista de Productos</h1>
        <button 
          className="btn-admin verde" 
          onClick={() => navigate('/admin/agregar-producto')}
        >
          + Agregar Producto
        </button>
      </div>

      {/* Buscador */}
      <div style={{ margin: '20px 0' }}>
        <input
          type="text"
          placeholder="Buscar por nombre o ID..."
          value={busqueda}
          onChange={e => setBusqueda(e.target.value)}
          style={{
            width: '100%',
            maxWidth: '400px',
            padding: '10px',
            borderRadius: '5px',
            border: '1px solid #ccc'
          }}
        />
      </div>

      <table className="tabla-admin">
        <thead>
          <tr>
            <th>ID</th>
            <th>Imagen</th>
            <th>Nombre</th>
            <th>Precio</th>
            <th>Stock</th>
            <th>Estado</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody>
          {productosFiltrados.length === 0 ? (
            <tr>
              <td colSpan="7" style={{ textAlign: 'center', padding: '20px' }}>
                No se encontraron productos.
              </td>
            </tr>
          ) : (
            productosFiltrados.map((producto) => (
              <tr key={producto.id}>
                <td>#{producto.id}</td>
                <td>
                  <img 
                    src={getImageUrl(producto.imagen)} 
                    alt="Producto" 
                    style={{ width: '50px', height: '50px', objectFit: 'cover', borderRadius: '4px' }}
                    onError={(e) => {
                      e.target.src = 'https://img.freepik.com/free-vector/glitch-error-404-page_23-2148105404.jpg';
                    }}
                  />
                </td>
                <td>{producto.nombre}</td>
                <td>S/ {producto.precio}</td>
                <td>{producto.stock}</td>
                <td className={`estado-${producto.estado?.toLowerCase()}`}>
                  {producto.estado}
                </td>
                <td>
                  <button 
                    className="btn-admin" 
                    onClick={() => navigate(`/admin/producto/${producto.id}`)}
                  >
                    Editar
                  </button>
                  <button 
                    className="btn-admin secundario"
                    onClick={() => handleEliminar(producto.id)}
                  >
                    Eliminar
                  </button>
                </td>
              </tr>
            ))
          )}
        </tbody>
      </table>
    </div>
  );
}

export default ListaProductos;
