function DetalleUsuario({ cambiarVista }) {
  return (
    <div>
      <main className="usuario-detalle">
        <h2>Detalles de usuario</h2>
        <div className="usuario-card">
          <div className="usuario-info">
            <h3>Simon The Digger</h3>
            <p>Correo: <a href="https://www.google.com/search?sxsrf=AE3TifNA5sf10-eLeMZAINmp5r-xPdKYdg:1748549989903&q=Simon+The+Digger">Simon.Digger@gmail.com</a></p>
            <p>Fecha de registro: 20/01/2025</p>
            <p>Estado: <strong>Activo</strong></p>
          </div>
          <img src="/img/SimonTheDigger.webp" alt="Simon The Digger" className="usuario-foto" />
        </div>

        <h4>Últimas órdenes</h4>
        <table className="tabla-ordenes">
          <thead>
            <tr>
              <th>#ID</th>
              <th>Fecha</th>
              <th>Total</th>
              <th>Acciones</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><a href="#">#1234</a></td>
              <td>20/01/2025</td>
              <td>S/199.00</td>
              <td><button className="btn-admin" onClick={() => cambiarVista('detalle-orden')}>Ver detalle</button></td>
            </tr>
            <tr>
              <td><a href="#">#2356</a></td>
              <td>20/02/2025</td>
              <td>S/199.00</td>
              <td><button className="btn-admin" onClick={() => cambiarVista('detalle-orden')}>Ver detalle</button></td>
            </tr>
            <tr>
              <td><a href="#">#4577</a></td>
              <td>20/03/2025</td>
              <td>S/199.00</td>
              <td><button className="btn-admin" onClick={() => cambiarVista('detalle-orden')}>Ver detalle</button></td>
            </tr>
            <tr>
              <td><a href="#">#3743</a></td>
              <td>20/03/2025</td>
              <td>S/199.00</td>
              <td><button className="btn-admin" onClick={() => cambiarVista('detalle-orden')}>Ver detalle</button></td>
            </tr>
            <tr>
              <td><a href="#">#3743</a></td>
              <td>20/03/2025</td>
              <td>S/199.00</td>
              <td><button className="btn-admin" onClick={() => cambiarVista('detalle-orden')}>Ver detalle</button></td>
            </tr>
          </tbody>
        </table>

        <div className="paginacion">
          <button className="activo">1</button>
          <button>2</button>
          <button>3</button>
          <span>...</span>
          <button>10</button>
        </div>
      </main>
    </div>
  )
}

export default DetalleUsuario