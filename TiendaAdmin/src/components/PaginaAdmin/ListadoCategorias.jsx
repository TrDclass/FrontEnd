import { useState, useEffect } from 'react';
import ListaCategoriaApi from '../../api/ListaCategoriaApi';
import AgregarCategoria from './AgregarCategoria';

function ListadoCategorias() {
  const [categorias, setCategorias] = useState([]);
  const [busqueda, setBusqueda] = useState('');
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [formVisible, setFormVisible] = useState(false); // Para mostrar/ocultar el formulario de agregar categoría

  useEffect(() => {
    const cargarCategorias = async () => {
      try {
        const data = await ListaCategoriaApi.findAll();
        setCategorias(data);
      } catch (err) {
        setError("Error al cargar las categorías");
      } finally {
        setLoading(false);
      }
    };
    cargarCategorias();
  }, []);

  const categoriasFiltradas = categorias.filter(cat =>
    cat.nombre.toLowerCase().includes(busqueda.toLowerCase())
  );

  const handleEliminar = async (id) => {
    if (window.confirm('¿Estás seguro que deseas eliminar esta categoría?')) {
      try {
        await ListaCategoriaApi.remove(id);
        setCategorias(categorias.filter(cat => cat.id !== id));
      } catch (err) {
        setError("Error al eliminar la categoría");
      }
    }
  };

  const handleAgregar = () => {
    setFormVisible(true); // Muestra el formulario para agregar una categoría
  };

  const onCategoriaCreada = (nuevaCategoria) => {
    setCategorias((prevCategorias) => [...prevCategorias, nuevaCategoria]);
    setFormVisible(false); // Oculta el formulario después de agregar la categoría
  };

  if (loading) return <main className="contenido-principal">Cargando categorías...</main>;
  if (error) return <main className="contenido-principal">Error: {error}</main>;

  return (
    <main className="contenido-principal">
      <h2>Listado de categorías</h2>

      <div className="buscador-contenido">
        <input
          type="text"
          placeholder="Buscar una categoría..."
          value={busqueda}
          onChange={e => setBusqueda(e.target.value)}
        />
        <button className="btn-agregar" onClick={handleAgregar}>+ Agregar categoría</button>
      </div>

      {/* Mostrar el formulario de agregar categoría si formVisible es true */}
      {formVisible && <AgregarCategoria onCategoriaCreada={onCategoriaCreada} />}

      <div className="tabla-wrapper">
        <table>
          <thead>
            <tr>
              <th>Nombre</th>
              <th>Descripción</th>
              <th>Acciones</th>
            </tr>
          </thead>
          <tbody>
            {categoriasFiltradas.length === 0 ? (
              <tr>
                <td colSpan="3" style={{ textAlign: 'center', padding: '20px' }}>
                  No hay categorías para mostrar
                </td>
              </tr>
            ) : (
              categoriasFiltradas.map(cat => (
                <tr key={cat.id}>
                  <td><strong>{cat.nombre}</strong></td>
                  <td>{cat.descripcion}</td>
                  <td className="acciones">
                    <button
                      className="btn-eliminar"
                      title="Eliminar"
                      onClick={() => handleEliminar(cat.id)}
                    >
                      🗑️
                    </button>
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </main>
  );
}

export default ListadoCategorias;
