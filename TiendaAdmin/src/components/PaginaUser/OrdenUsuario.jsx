import { useEffect, useState } from 'react';
import personaUsuariaAPI from '../../api/personaUsuariaAPI';

function ContenidoUsuario() {
  const [usuarios, setUsuarios] = useState([]);
  const [ordenes, setOrdenes] = useState([]);

  useEffect(() => {
    const cargarDatos = async () => {
      try {
        const data = await personaUsuariaAPI.findAll();
        setUsuarios(data);

        // Simulación de órdenes por usuario
        const ordenesSimuladas = data.map((usuario, i) => ({
          id: 1000 + i,
          usuario: usuario.nombre,
          fecha: usuario.fecha,
          estado: i % 2 === 0 ? 'Entregado' : 'Pendiente',
        }));

        setOrdenes(ordenesSimuladas);
      } catch (error) {
        console.error('Error al cargar datos:', error);
      }
    };

    cargarDatos();
  }, []);

  const usuario = usuarios[0];

  const getImageUrl = (foto) => `/img/${foto || 'default.png'}`;

  return (
    <div className="contenido-usuario">
      <h1>¡Bienvenido!</h1>

      <div className="info-datos">
        <div className="info-personal">
          <h3>Datos personales</h3>
          {usuario ? (
            <>
              <p><strong>Nombre:</strong> {usuario.nombre}</p>
              <p><strong>Correo:</strong> <a href={`mailto:${usuario.correo}`}>{usuario.correo}</a></p>
              <p><strong>Fecha de registro:</strong> {usuario.fecha}</p>
            </>
          ) : (
            <p>Cargando datos del usuario...</p>
          )}
        </div>

        <div className="info-personal">
          <h3>Dirección de envío</h3>
          <p>Av. La Molina 12334</p>
          <p>Lima - Lima</p>
          <p>Celular de contacto: {usuario?.celular || 'Sin datos'}</p>
        </div>

        <div className="caja-orden">
          <div className="numero-orden">Órdenes<br />{ordenes.length}</div>
          <div className="cuadro-monto">Monto ahorrado<br />S/129</div>
        </div>

        <div className="fotoperfil">
          <img
            src={getImageUrl(usuario?.foto)}
            alt="Usuario"
            onError={(e) => e.target.src = "/img/default.png"}
          />
        </div>
      </div>

      <div className="parte-ordenes">
        <h2>Tus órdenes</h2>
        <input type="text" placeholder="Buscar una orden..." />
        <table className="tabla-ordenes">
          <thead>
            <tr>
              <th>#ORDEN</th>
              <th>Usuario</th>
              <th>Fecha de orden</th>
              <th>Estado</th>
            </tr>
          </thead>
          <tbody>
            {ordenes.map((orden, i) => (
              <tr key={i}>
                <td className="id">{orden.id}</td>
                <td>{orden.usuario}</td>
                <td>{orden.fecha}</td>
                <td className={orden.estado === "Entregado" ? "entregado" : "porentregar"}>
                  {orden.estado}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default ContenidoUsuario;