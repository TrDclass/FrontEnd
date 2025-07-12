import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import api from '../../api/personaUsuariaAPI'; 

function Login() {
  const navigate = useNavigate();
  const [correo, setCorreo] = useState('');
  const [contrasena, setContrasena] = useState('');
  const [error, setError] = useState(null);

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const usuarios = await api.findAll(); // Trae todos los usuarios
      const usuario = usuarios.find(
        (u) => u.correo === correo && u.contrasena === contrasena
      );

      if (usuario) {
        if (usuario.categoria === 'ADMIN') {
          navigate('/admin');
        } else if (usuario.categoria === 'USER') {
          navigate('/mis-ordenes');
        } else {
          setError('Categoría desconocida.');
        }
      } else {
        setError('Correo o contraseña equivocada.');
      }
    } catch (err) {
      console.error('Error al iniciar sesion:', err);
      setError('Hubo un problema al conectar con el servidor.');
    }
  };

  return (
    <main className="contenido-login">
      <h2>Iniciar sesión</h2>
      <form className="form-login" onSubmit={handleLogin}>
        <label>
          Correo
          <input
            type="email"
            value={correo}
            onChange={(e) => setCorreo(e.target.value)}
            placeholder="usuario@gmail.com"
            required
          />
        </label>

        <label>
          Contraseña
          <div className="campo-password">
            <input
              type="password"
              value={contrasena}
              onChange={(e) => setContrasena(e.target.value)}
              placeholder="Contraseña"
              required
            />
            <span className="icono-ojo">👁️</span>
          </div>
        </label>

        {error && <p style={{ color: 'red' }}>{error}</p>}

        <button type="submit" className="btn-principal">
          Iniciar sesión
        </button>

        <div className="acciones-secundarias">
          <a onClick={() => navigate('/registro')} style={{ cursor: 'pointer' }}>
            Registrarme
          </a>
          <a onClick={() => navigate('/recuperar-contrasena')} style={{ cursor: 'pointer' }}>
            Olvidé mi contraseña
          </a>
        </div>
      </form>
    </main>
  );
}

export default Login;