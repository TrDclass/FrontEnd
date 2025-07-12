import { useNavigate } from 'react-router-dom';

function Todo() {
  const navigate = useNavigate();
  
  const secciones = [
    {
      alumno: "Alumno 1",
      funcionalidades: [
        { nombre: "Página Principal", ruta: "/" },
        { nombre: "Categorias", ruta: "/categorias/1" },
        { nombre: "Detalle de producto (antes de agregar a carrito)", ruta: "/productos" },
      ],
    },
    {
      alumno: "Alumno 2",
      funcionalidades: [
        { nombre: "Carrito de compras", ruta: "/carrito" },
        { nombre: "Checkout", ruta: "/checkout" },
        { nombre: "Checkout Metodos de Pago", ruta: "/checkout/metodo-pago" },
        { nombre: "Pago1", ruta: "/checkout/pago-1" },
        { nombre: "Pago2", ruta: "/checkout/pago-2" },
        { nombre: "Pedido completo (Gracias por compra)", ruta: "/pedido-completo" },
      ],
    },
    {
      alumno: "Alumno 3",
      funcionalidades: [
        { nombre: "Login (y validación)", ruta: "/login" },
        { nombre: "Registro de usuario", ruta: "/registro" },
        { nombre: "Recuperación de Contraseña", ruta: "/recuperar-contrasena" },
        { nombre: "Listado de Órdenes (usuario)", ruta: "/mis-ordenes" },
      ],
    },
    {
      alumno: "Alumno 4",
      funcionalidades: [
        { nombre: "Listado de Categorías (Admin)", ruta: "/admin/categorias" },
        { nombre: "Detalle de orden (usuario)", ruta: "/orden/:id" },
        { nombre: "Cambio de contrasena", ruta: "/cambiar-contrasena" },
        { nombre: "Datos de usuario", ruta: "/mis-datos" },
        { nombre: "Agregar categoria", ruta: "/admin/agregar-categoria" },
      ],
    },
    {
      alumno: "Alumno 5",
      funcionalidades: [
        { nombre: "Dashboard Admin", ruta: "/admin" },
        { nombre: "Lista de Productos (Admin)", ruta: "/admin/productos" },
        { nombre: "Agregar Producto (Admin)", ruta: "/admin/agregar-producto" },
        { nombre: "Detalle y Editar Producto", ruta: "/admin/producto/:id" },
      ],
    },
    {
      alumno: "Alumno 6",
      funcionalidades: [
        { nombre: "Lista de Usuarios (Admin)", ruta: "/admin/usuarios" },
        { nombre: "Detalle de Usuario (Admin)", ruta: "/admin/usuario/:id" },
        { nombre: "Lista de Órdenes (Admin)", ruta: "/admin/ordenes" },
        { nombre: "Detalle de Orden (Admin)", ruta: "/admin/orden/:id" },
      ],
    },
  ];

  return (
    <div style={{ padding: '20px' }}>
      <h1>Todo - Navegación rápida</h1>
      {secciones.map((seccion, index) => (
        <div key={index} style={{ marginBottom: '20px' }}>
          <h2>{seccion.alumno}</h2>
          <ul>
            {seccion.funcionalidades.map((func, i) => (
              <li key={i} style={{ marginBottom: '5px' }}>
                {func.ruta ? (
                  <button 
                    onClick={() => navigate(func.ruta)} 
                  >
                    {func.nombre}
                  </button>
                ) : (
                  <span style={{ color: 'gray' }}>{func.nombre} (no implementado)</span>
                )}
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}

export default Todo;