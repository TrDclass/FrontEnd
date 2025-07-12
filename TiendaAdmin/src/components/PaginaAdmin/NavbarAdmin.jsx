import { NavLink } from 'react-router-dom';
import { useLocation } from 'react-router-dom';

function NavbarAdmin() {
  const location = useLocation();

  return (
    <nav className="barra-navegacion">
      <ul>
        <li>
          <NavLink 
            to="/admin" 
            className={({ isActive }) => isActive ? 'active' : ''}
          >
            Dashboard
          </NavLink>
        </li>
        <li>
          <NavLink 
            to="/admin/productos" 
            className={({ isActive }) => isActive ? 'active' : ''}
          >
            Productos
          </NavLink>
        </li>
        <li>
          <NavLink 
            to="/admin/usuarios" 
            className={({ isActive }) => isActive ? 'active' : ''}
          >
            Usuarios
          </NavLink>
        </li>
        <li>
          <NavLink 
            to="/admin/ordenes" 
            className={({ isActive }) => isActive ? 'active' : ''}
          >
            Órdenes
          </NavLink>
        </li>
        <li>
          <NavLink 
            to="/admin/categorias" 
            className={({ isActive }) => isActive ? 'active' : ''}
          >
            Categorías
          </NavLink>
        </li>
      </ul>
      <div className="ofertas">ADMINISTRADOR</div>
    </nav>
  );
}

export default NavbarAdmin;