function DetalleOrden({ cambiarVista }) {
  const productos = [
    { id: 2223, nombre: 'Manzanas Rojas', categoria: 'Frutas y verduras', cantidad: 10, total: 'S/19.00', img: '🍎' },
    { id: 6425, nombre: 'Leche gloria', categoria: 'Lacteos y huevos', cantidad: 4, total: 'S/19.00', img: '🥛' },
    { id: 2344, nombre: 'Papaya', categoria: 'Frutas y verduras', cantidad: 4, total: 'S/19.00', img: '🍈' },
    { id: 4344, nombre: 'Sandía', categoria: 'Frutas y verduras', cantidad: 12, total: 'S/19.00', img: '🍉' },
    { id: 5454, nombre: 'Pollo entero fresco con menudencia', categoria: 'Carnes, aves y pescados', cantidad: 1, total: 'S/19.00', img: '🍗' },
    { id: 8123, nombre: 'Uvas', categoria: 'Frutas y verduras', cantidad: 1, total: 'S/19.00', img: '🍇' }
  ]

  return (
    <main className="detalle-orden">
      <h2>Detalles de Órden</h2>
      <div className="orden-contenedor">
        <div className="orden-header">
          <h3>Orden <span className="orden-id">#1234</span></h3>
          <div className="estado-total">
            <p><strong>Estado:</strong> <span className="estado-entregado">Entregado</span></p>
            <p><strong>Monto total:</strong> S/400.00</p>
          </div>
        </div>
      </div>
      <div className="orden-contenedor">
        <h4>Productos ordenados</h4>
        <table className="tabla-productos">
          <thead>
            <tr>
              <th>Id</th>
              <th>Nombre</th>
              <th>Categoría</th>
              <th>Cantidad</th>
              <th>Total</th>
            </tr>
          </thead>
          <tbody>
            {productos.map((prod, index) => (
              <tr key={index}>
                <td className="id-prod">#{prod.id}</td>
                <td><span className="img-prod">{prod.img}</span> {prod.nombre}</td>
                <td><strong>{prod.categoria}</strong></td>
                <td>{prod.cantidad}</td>
                <td>{prod.total}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </main>
  )
}

export default DetalleOrden