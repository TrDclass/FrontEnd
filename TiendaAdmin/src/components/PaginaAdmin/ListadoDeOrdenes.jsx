import { useState } from 'react'
import productoApi from '../../api/productoApi';
import personaUsuariaAPI from '../../api/personaUsuariaAPI';

const ordenesData = [
  { id: 1234, usuario: 'Juan Perez', fecha: '20/01/2025', total: 'S/199.00', estado: 'Entregado' },
  { id: 1234, usuario: 'María Gonzales', fecha: '20/01/2025', total: 'S/199.00', estado: 'Por entregar' },
  { id: 1234, usuario: 'Marco Aurelio', fecha: '20/01/2025', total: 'S/199.00', estado: 'Entregado' },
  { id: 1234, usuario: 'Ana Dias', fecha: '20/01/2025', total: 'S/199.00', estado: 'Entregado' },
  { id: 1234, usuario: 'Juan Perez', fecha: '20/01/2025', total: 'S/199.00', estado: 'Entregado' },
  { id: 1234, usuario: 'María Gonzales', fecha: '20/01/2025', total: 'S/199.00', estado: 'Por entregar' },
  { id: 1234, usuario: 'Marco Aurelio', fecha: '20/01/2025', total: 'S/199.00', estado: 'Entregado' },
  { id: 1234, usuario: 'Ana Dias', fecha: '20/01/2025', total: 'S/199.00', estado: 'Entregado' },
  { id: 1234, usuario: 'Juan Perez', fecha: '20/01/2025', total: 'S/199.00', estado: 'Entregado' },
  { id: 1234, usuario: 'María Gonzales', fecha: '20/01/2025', total: 'S/199.00', estado: 'Por entregar' },
  { id: 1234, usuario: 'Marco Aurelio', fecha: '20/01/2025', total: 'S/199.00', estado: 'Entregado' },
  { id: 1234, usuario: 'Ana Dias', fecha: '20/01/2025', total: 'S/199.00', estado: 'Entregado' },
  { id: 1234, usuario: 'Marco Aurelio', fecha: '20/01/2025', total: 'S/199.00', estado: 'Por entregar' }
]

function ListadoDeOrdenes({ cambiarVista }) {
  const [filtro, setFiltro] = useState('')

  const ordenesFiltradas = ordenesData.filter((orden) =>
    orden.usuario.toLowerCase().includes(filtro.toLowerCase())
  )

  return (
    <main className="usuario-detalle">
      <h2>Listado de órdenes</h2>
      <div className="buscador-usuarios">
        <input
          type="text"
          placeholder="Buscar una órden..."
          value={filtro}
          onChange={(e) => setFiltro(e.target.value)}
        />
        <button>Buscar</button>
      </div>
      <table className="tabla-admin">
        <thead>
          <tr>
            <th>#ORDEN</th>
            <th>Usuario</th>
            <th>Fecha de órden</th>
            <th>Total</th>
            <th>Estado</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody>
          {ordenesFiltradas.map((orden, index) => (
            <tr key={index}>
              <td className="orden-id">#{orden.id}</td>
              <td>{orden.usuario}</td>
              <td>{orden.fecha}</td>
              <td>{orden.total}</td>
              <td className={orden.estado === 'Entregado' ? 'estado-entregado' : 'estado-pendiente'}>{orden.estado}</td>
              <td><button className="btn-admin" onClick={() => cambiarVista('detalle-orden')}>Ver detalle</button></td>
            </tr>
          ))}
        </tbody>
      </table>
    </main>
  )
}

export default ListadoDeOrdenes

