import { useState } from 'react';
import ListaCategoriaApi from '../../api/ListaCategoriaApi';

function AgregarCategoria({ onCategoriaCreada }) {
  const [formData, setFormData] = useState({
    nombre: '',
    descripcion: '',
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    try {
    
      const nuevaCategoria = await ListaCategoriaApi.create(formData);
      alert('Categoría creada exitosamente');

     
      onCategoriaCreada(nuevaCategoria);

  
      setFormData({ nombre: '', descripcion: '' });
    } catch (err) {
      console.error('Error al crear la categoría:', err);
      setError('Error al crear la categoría');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="form-container">
      <h2>Agregar Nueva Categoría</h2>
      {error && <div className="error-message">{error}</div>}

      <form onSubmit={handleSubmit} className="formulario-admin">
        <div className="grupo-formulario">
          <label>Nombre</label>
          <input
            type="text"
            name="nombre"
            value={formData.nombre}
            onChange={handleChange}
            required
            placeholder="Nombre de la categoría"
          />
        </div>

        <div className="grupo-formulario">
          <label>Descripción</label>
          <textarea
            name="descripcion"
            value={formData.descripcion}
            onChange={handleChange}
            required
            placeholder="Descripción de la categoría"
          />
        </div>

        <div className="acciones-formulario">
          <button
            type="button"
            className="btn-admin secundario"
            onClick={() => setFormData({ nombre: '', descripcion: '' })}
            disabled={loading}
          >
            Cancelar
          </button>
          <button
            type="submit"
            className="btn-admin verde"
            disabled={loading}
          >
            {loading ? 'Guardando...' : 'Guardar Categoría'}
          </button>
        </div>
      </form>
    </div>
  );
}

export default AgregarCategoria;
