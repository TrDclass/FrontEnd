import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import personaUsuariaAPI from '../../api/personaUsuariaAPI';

function Recuperarcontraseña() {
  const [correo, setCorreo] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const usuarios = await personaUsuariaAPI.findAll();
      const usuario = usuarios.find(u => u.correo === correo);

      if (usuario) {
        // Opcional: puedes guardar el ID o correo en localStorage o contexto
        localStorage.setItem('correoRecuperacion', usuario.correo);

        // Redirigir al cambio de contraseña
        navigate('/cambiar-contrasena');
      } else {
        setError('El correo no está registrado.');
      }
    } catch (err) {
      console.error('Error al verificar correo:', err);
      setError('Hubo un problema al verificar el correo.');
    }
  };

  return (
    <main className="contenido-recuperarr">
      <form className="form-registroo" onSubmit={handleSubmit}>
        <h2>Olvidé mi contraseña</h2>
        <article>
          <p>
            Se enviará un enlace a tu correo electrónico para que puedas validar tu
            identidad y restablecer tu contraseña.
          </p>
          <p>
            Por favor, asegúrate de revisar tu bandeja de entrada y la carpeta de spam.
          </p>
        </article>

        <div className="campo-correoo">
          <label>
            Correo
            <input
              type="email"
              name="correo"
              value={correo}
              onChange={(e) => setCorreo(e.target.value)}
              placeholder="usuario@gmail.com"
              required
            />
          </label>
        </div>

        {error && <p style={{ color: 'red' }}>{error}</p>}

        <div className="btn-contenerr">
          <button type="submit" className="btn-recuperarr">
            Recuperar contraseña
          </button>
        </div>
      </form>
    </main>
  );
}

export default Recuperarcontraseña;