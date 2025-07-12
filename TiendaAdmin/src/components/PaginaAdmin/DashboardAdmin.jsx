import { useEffect, useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import ListaCategoriaApi from '../../api/ListaCategoriaApi'; // Ajusta el path si es necesario

function DashboardAdmin() {
  const navigate = useNavigate();
  const [usuarios, setUsuarios] = useState([]);

  useEffect(() => {
    const fetchUsuarios = async () => {
      try {
        const response = await ListaCategoriaApi.findAll();
        setUsuarios(response.data || []);
      } catch (error) {
        console.error('Error al obtener los usuarios:', error);
      }
    };

    fetchUsuarios();
  }, []);

  // Calcular usuarios nuevos (registrados en los últimos 7 días)
  const usuariosNuevos = usuarios.filter(usuario => {
    const fechaRegistro = new Date(usuario.fecha);
    const hoy = new Date();
    const diferenciaDias = (hoy - fechaRegistro) / (1000 * 60 * 60 * 24);
    return diferenciaDias <= 7;
  });

  return (
    <div className="admin-container">
      <h1>Dashboard Administrativo</h1>

      <div className="tarjetas-dashboard">
        <div className="tarjeta-dashboard">
          <h2>Ventas totales</h2>
          <div className="valor">S/ 12,450.00</div>
        </div>
        <div className="tarjeta-dashboard">
          <h2>Órdenes completadas</h2>
          <div className="valor">87</div>
        </div>
        <div className="tarjeta-dashboard">
          <h2>Usuarios nuevos</h2>
          <div className="valor">{usuariosNuevos.length}</div>
        </div>
        <div className="tarjeta-dashboard">
          <h2>Productos vendidos</h2>
          <div className="valor">156</div>
        </div>
      </div>

      <div className="seccion-usuarios">
        <div className="encabezado-seccion">
          <h2>Usuarios Registrados</h2>
          <button 
            className="btn-ver-todos" 
            onClick={() => navigate('/admin/usuarios')}
          >
            Ver todos
          </button>
        </div>

        <table className="tabla-admin">
          <thead>
            <tr>
              <th>ID</th>
              <th>Nombre</th>
              <th>Correo</th>
              <th>Fecha Registro</th>
              <th>Estado</th>
              <th>Acciones</th>
            </tr>
          </thead>
          <tbody>
            {usuarios.map(usuario => (
              <tr key={usuario.id}>
                <td>#{usuario.id.toString().padStart(3, '0')}</td>
                <td>{usuario.nombre}</td>
                <td>{usuario.correo}</td>
                <td>{usuario.fecha}</td>
                <td className={usuario.estado === 'Activo' ? 'estado-activo' : 'estado-inactivo'}>
                  {usuario.estado}
                </td>
                <td>
                  {usuario.estado === 'Activo' ? (
                    <button className="btn-admin secundario">Desactivar</button>
                  ) : (
                    <button className="btn-admin verde">Activar</button>
                  )}
                  <button 
                    className="btn-admin" 
                    onClick={() => navigate(`/admin/usuario/${usuario.id}`)}
                  >
                    Ver Detalle
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="encabezado-seccion">
        <h2>Órdenes Recientes</h2>
        <button 
          className="btn-ver-todos" 
          onClick={() => navigate('/admin/ordenes')}
        >
          Ver todos
        </button>
      </div>

      <table className="tabla-admin">
        <thead>
          <tr>
            <th>#ID</th>
            <th>Cliente</th>
            <th>Fecha</th>
            <th>Total</th>
            <th>Estado</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <Link to="/admin/orden/1256" style={{ textDecoration: 'none', color: 'inherit' }}>
                #1256
              </Link>
            </td>
            <td>Juan Pérez</td>
            <td>20/05/2025</td>
            <td>S/ 199.00</td>
            <td className="estado-activo">Completado</td>
            <td>
              <button 
                className="btn-admin" 
                onClick={() => navigate('/admin/orden/1256')}
              >
                Ver
              </button>
            </td>
          </tr>
          <tr>
            <td>
              <Link to="/admin/orden/1255" style={{ textDecoration: 'none', color: 'inherit' }}>
                #1255
              </Link>
            </td>
            <td>María Gómez</td>
            <td>20/05/2025</td>
            <td>S/ 245.00</td>
            <td className="estado-activo">Completado</td>
            <td>
              <button 
                className="btn-admin" 
                onClick={() => navigate('/admin/orden/1255')}
              >
                Ver
              </button>
            </td>
          </tr>
          <tr>
            <td>
              <Link to="/admin/orden/1254" style={{ textDecoration: 'none', color: 'inherit' }}>
                #1254
              </Link>
            </td>
            <td>Carlos Ruiz</td>
            <td>19/05/2025</td>
            <td>S/ 120.00</td>
            <td className="estado-inactivo">Cancelado</td>
            <td>
              <button 
                className="btn-admin" 
                onClick={() => navigate('/admin/orden/1254')}
              >
                Ver
              </button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default DashboardAdmin;
