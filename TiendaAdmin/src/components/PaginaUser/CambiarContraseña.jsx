import { useState } from 'react';

function CambiarContrasena() {
  const [contrasenaActual, setContrasenaActual] = useState('');
  const [nuevaContrasena, setNuevaContrasena] = useState('');
  const [confirmarContrasena, setConfirmarContrasena] = useState('');

  const MIN_LENGTH = 6;

  const handleGuardar = (e) => {
    e.preventDefault();

    if (!contrasenaActual || !nuevaContrasena || !confirmarContrasena) {
      alert('Todos los campos son obligatorios.');
      return;
    }

    if (nuevaContrasena.length < MIN_LENGTH) {
      alert(`La nueva contraseña debe tener al menos ${MIN_LENGTH} caracteres.`);
      return;
    }

    if (nuevaContrasena !== confirmarContrasena) {
      alert('La nueva contraseña y su confirmación no coinciden.');
      return;
    }

    alert('Contraseña cambiada correctamente.');
    setContrasenaActual('');
    setNuevaContrasena('');
    setConfirmarContrasena('');
  };

  const handleCancelar = () => {
    setContrasenaActual('');
    setNuevaContrasena('');
    setConfirmarContrasena('');
    alert('Cambio cancelado.');
  };

  return (
    <main className="contenido-principal">
      <h2>Cambiar Contraseña</h2>
      <form className="formulario-admin" onSubmit={handleGuardar}>
        <div className="grupo-formulario">
          <label>Contraseña actual</label>
          <input
            type="password"
            value={contrasenaActual}
            onChange={(e) => setContrasenaActual(e.target.value)}
            placeholder="Contraseña actual"
          />
        </div>

        <div className="grupo-formulario">
          <label>Nueva contraseña</label>
          <input
            type="password"
            value={nuevaContrasena}
            onChange={(e) => setNuevaContrasena(e.target.value)}
            placeholder="Nueva contraseña"
          />
        </div>

        <div className="grupo-formulario">
          <label>Confirmar nueva contraseña</label>
          <input
            type="password"
            value={confirmarContrasena}
            onChange={(e) => setConfirmarContrasena(e.target.value)}
            placeholder="Confirmar nueva contraseña"
          />
        </div>

        <div className="acciones-formulario">
          <button type="button" className="btn-admin secundario" onClick={handleCancelar}>
            Cancelar
          </button>
          <button type="submit" className="btn-admin verde">
            Guardar Cambio
          </button>
        </div>
      </form>
    </main>
  );
}

export default CambiarContrasena;
