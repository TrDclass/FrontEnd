import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import productoApi from '../../api/productoApi';
import ListaCategoriaApi from '../../api/ListaCategoriaApi';

function AgregarProducto() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    nombre: '',
    descripcion: '',
    precio: '',
    stock: '',
    categoria: '',
    estado: 'Activo',
    imagen: null,
  });

  const [previewImage, setPreviewImage] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [categorias, setCategorias] = useState([]);

  // Cargar categorías desde la API
  useEffect(() => {
    const fetchCategorias = async () => {
      try {
        const response = await ListaCategoriaApi.findAll();
        const data = response.data ?? response; // soporte para ambos formatos
        setCategorias(data);

        // Si no hay categoría seleccionada, asignar la primera disponible
        if (data.length > 0) {
          setFormData((prev) => ({
            ...prev,
            categoria: data[0].nombre,
          }));
        }
      } catch (err) {
        console.error('Error al cargar las categorías:', err);
        setCategorias([]); // Evita undefined
      }
    };

    fetchCategorias();
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setFormData((prev) => ({ ...prev, imagen: file }));

      const reader = new FileReader();
      reader.onload = (event) => {
        setPreviewImage(event.target.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    try {
      await productoApi.create(formData);
      navigate('/admin/productos');
    } catch (err) {
      setError('Error al guardar el producto');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="admin-container">
      <h1>Agregar Nuevo Producto</h1>
      {error && <div className="error-message">{error}</div>}

      <form className="formulario-admin" onSubmit={handleSubmit}>
        <div className="grupo-formulario">
          <label>Nombre del Producto</label>
          <input
            type="text"
            name="nombre"
            value={formData.nombre}
            onChange={handleChange}
            required
          />
        </div>

        <div className="grupo-formulario">
          <label>Descripción</label>
          <textarea
            name="descripcion"
            value={formData.descripcion}
            onChange={handleChange}
            required
          />
        </div>

        <div style={{ display: 'flex', gap: '20px' }}>
          <div className="grupo-formulario" style={{ flex: 1 }}>
            <label>Precio (S/)</label>
            <input
              type="number"
              name="precio"
              step="0.01"
              min="0"
              value={formData.precio}
              onChange={handleChange}
              required
            />
          </div>

          <div className="grupo-formulario" style={{ flex: 1 }}>
            <label>Stock</label>
            <input
              type="number"
              name="stock"
              min="0"
              value={formData.stock}
              onChange={handleChange}
              required
            />
          </div>
        </div>

        <div className="grupo-formulario">
          <label>Categoría</label>
          <select
            name="categoria"
            value={formData.categoria}
            onChange={handleChange}
            required
          >
            {categorias.length === 0 ? (
              <option disabled>Cargando categorías...</option>
            ) : (
              categorias.map((cat) => (
                <option key={cat.id} value={cat.nombre}>
                  {cat.nombre}
                </option>
              ))
            )}
          </select>
        </div>

        <div className="grupo-formulario">
          <label>Estado</label>
          <select
            name="estado"
            value={formData.estado}
            onChange={handleChange}
            required
          >
            <option value="Activo">Activo</option>
            <option value="Inactivo">Inactivo</option>
          </select>
        </div>

        <div className="grupo-formulario">
          <label>Imagen del Producto</label>
          <div style={{ display: 'flex', alignItems: 'center', gap: '20px', marginTop: '10px' }}>
            {previewImage ? (
              <img
                src={previewImage}
                alt="Preview"
                style={{
                  width: '100px',
                  height: '100px',
                  objectFit: 'cover',
                  borderRadius: '8px',
                  border: '1px solid #ddd'
                }}
              />
            ) : (
              <div
                style={{
                  width: '100px',
                  height: '100px',
                  backgroundColor: '#f5f5f5',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  borderRadius: '8px',
                  border: '1px dashed #ccc'
                }}
              >
                <span>Vista previa</span>
              </div>
            )}
            <input
              type="file"
              accept="image/*"
              onChange={handleImageChange}
              required
            />
          </div>
        </div>

        <div className="acciones-formulario">
          <button
            type="button"
            className="btn-admin secundario"
            onClick={() => navigate('/admin/productos')}
            disabled={loading}
          >
            Cancelar
          </button>
          <button
            type="submit"
            className="btn-admin verde"
            disabled={loading}
          >
            {loading ? 'Guardando...' : 'Guardar Producto'}
          </button>
        </div>
      </form>
    </div>
  );
}

export default AgregarProducto;
