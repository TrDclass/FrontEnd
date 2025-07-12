import { useEffect, useState } from 'react';
import personaUsuariaAPI from '../../api/personaUsuariaAPI';

function ListadoDeUsuarios({ cambiarVista }) {
  const [busqueda, setBusqueda] = useState("");
  const [usuarios, setUsuarios] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const cargarUsuarios = async () => {
      try {
        const data = await personaUsuariaAPI.findAll();
        setUsuarios(data);
      } catch (err) {
        setError("Error al cargar los usuarios");
      } finally {
        setLoading(false);
      }
    };

    cargarUsuarios();
  }, []);

  const usuariosFiltrados = usuarios.filter(u =>
    u.nombre.toLowerCase().includes(busqueda.toLowerCase())
  );

  const toggleEstado = (id) => {
    const nuevosUsuarios = usuarios.map(u => {
      if (u.id === id) {
        return {
          ...u,
          estado: u.estado === "Activo" ? "Inactivo" : "Activo",
        };
      }
      return u;
    });
    setUsuarios(nuevosUsuarios);
  };

  const getImageUrl = (foto) => `/img/${foto || 'default.png'}`;

  if (loading) return <main className="usuario-detalle">Cargando usuarios...</main>;
  if (error) return <main className="usuario-detalle">Error: {error}</main>;

  return (
    <main className="usuario-detalle">
      <h2>Listado de usuarios</h2>

      <div className="buscador-usuarios">
        <input
          type="text"
          placeholder="Buscar un usuario..."
          value={busqueda}
          onChange={e => setBusqueda(e.target.value)}
        />
        <button onClick={() => { }}>Buscar</button>
      </div>

      <table className="tabla-admin">
        <thead>
          <tr>
            <th>Nombre completo</th>
            <th>Fecha de registro</th>
            <th>Estado</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody>
          {usuariosFiltrados.length === 0 ? (
            <tr>
              <td colSpan="4" style={{ textAlign: "center", padding: "20px" }}>
                No se encontraron usuarios.
              </td>
            </tr>
          ) : (
            usuariosFiltrados.map(personaUsuaria => (
              <tr key={personaUsuaria.id}>
                <td className="nombre-usuario">
                  <img
                    src={getImageUrl(personaUsuaria.foto)}
                    alt={personaUsuaria.nombre}
                    className="foto-usuario"
                  />
                  {personaUsuaria.nombre}
                </td>
                <td>{personaUsuaria.fecha}</td>
                <td className={personaUsuaria.estado === "Activo" ? "estado-activo" : "estado-inactivo"}>
                  {personaUsuaria.estado}
                </td>
                <td>
                  <button
                    className="btn-admin secundario"
                    onClick={() => toggleEstado(personaUsuaria.id)}
                  >
                    {personaUsuaria.estado === "Activo" ? "Desactivar" : "Activar"}
                  </button>
                  <button
                    className="btn-admin"
                    onClick={() => cambiarVista('detalle-usuario')}
                  >
                    Ver detalle
                  </button>
                </td>
              </tr>
            ))
          )}
        </tbody>
      </table>
    </main>
  );
}

export default ListadoDeUsuarios;



