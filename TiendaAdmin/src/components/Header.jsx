import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Header({ setIsAdminMode }) {
  const navigate = useNavigate();
  const [busqueda, setBusqueda] = useState('');
  const [mostrarControles, setMostrarControles] = useState(false); // Estado para ocultar/mostrar los botones

  const handleAdminMode = () => {
    setIsAdminMode(true);
    navigate('/admin');
  };

  const handleUserMode = () => {
    setIsAdminMode(false);
    navigate('/');
  };

  const handleSearch = (e) => {
    e.preventDefault();
    if (busqueda.trim()) {
      navigate(`/categorias/busqueda?q=${encodeURIComponent(busqueda.trim())}`);
    }
  };

  const toggleControles = (e) => {
    e.stopPropagation(); // Previene que el clic en el punto rojo dispare el del logo
    setMostrarControles(prev => !prev);
  };

  return (
    <header className="header-superior">
      <div
        className="logo"
        onClick={() => navigate('/')}
        style={{ display: 'flex', alignItems: 'center', gap: '5px' }}
      >
        Mi-Tiendita
        <span className="punto-rojo" onClick={toggleControles} style={{ cursor: 'pointer' }}>
          ●
        </span>
      </div>

      {mostrarControles && (
        <>
          <div className="btn-admin secundario" onClick={() => navigate('/todo')}>
            <button className="btn-admin secundario">Todo</button>
          </div>
          <div className="btn-admin verde" onClick={handleUserMode}>
            <button className="btn-admin verde">Modo Usuario</button>
          </div>
          <div className="btn-admin" onClick={handleAdminMode}>
            <button className="btn-admin">Modo Admin</button>
          </div>
        </>
      )}

      <form className="buscador" onSubmit={handleSearch}>
        <input
          type="text"
          placeholder="Buscar un producto..."
          value={busqueda}
          onChange={e => setBusqueda(e.target.value)}
        />
        <button type="submit">
          <img src="/img/icono.png" alt="Buscar" />
        </button>
      </form>

      <div className="acciones-superiores">
        <div className="btn-carrito">
          <button onClick={() => navigate('/carrito')}>
            🛒 Carrito <span>S/ 100.00</span>
          </button>
        </div>

        <div className="usuario">
          <button onClick={() => navigate('/login')}>👤 Usuario</button>
          <small onClick={() => navigate('/registro')}>Registrar cuenta</small>
        </div>
      </div>
    </header>
  );
}

export default Header;
