import { NavLink } from 'react-router-dom';
import { useLocation } from 'react-router-dom';

function NavbarUser() {
  const location = useLocation();

  return (
    <nav className="barra-navegacion">
      <ul>
        <li>
          <NavLink 
            to="/categorias/1" 
            className={({ isActive }) => isActive ? 'active' : ''}
          >
            ☰ Categorías
          </NavLink>
        </li>
        <li>
          <NavLink 
            to="/productos" 
            className={({ isActive }) => isActive ? 'active' : ''}
          >
            Productos
          </NavLink>
        </li>
      </ul>
      <div className="ofertas">Ofertas 👋</div>
    </nav>
  );
}

export default NavbarUser;