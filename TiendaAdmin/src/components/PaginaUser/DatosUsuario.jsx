import { useState } from 'react';

function DatosUsuario() {
  const [Nombre, setNombre] = useState('Juan');
  const [Apellido, setApellido] = useState('Pérez');
  const [Correo, setCorreo] = useState('juan.perez@example.com');
  const [DNI, setDNI] = useState('');

  const validarCorreo = (email) => {
    return email.includes('@');
  };

  const handleGuardar = (e) => {
    e.preventDefault();

    if (!Nombre.trim() || !Apellido.trim() || !Correo.trim() || !DNI.trim()) {
      alert('Todos los campos son obligatorios.');
      return;
    }

    if (!validarCorreo(Correo)) {
      alert('El correo electrónico no es válido.');
      return;
    }

    alert('Datos guardados correctamente.');
  };

  const handleCancelar = () => {
    alert('Cambios cancelados.');
  };

  return (
    <main className="contenido-principal">
      <h2>Datos de Registro de Usuario</h2>
      <form className="formulario-admin" onSubmit={handleGuardar}>
        <div className="grupo-formulario">
          <label>Nombre</label>
          <input
            type="text"
            value={Nombre}
            onChange={(e) => setNombre(e.target.value)}
            placeholder="Nombre"
          />
        </div>
        <div className="grupo-formulario">
          <label>Apellido</label>
          <input
            type="text"
            value={Apellido}
            onChange={(e) => setApellido(e.target.value)}
            placeholder="Apellido"
          />
        </div>
        <div className="grupo-formulario">
          <label>Correo electrónico</label>
          <input
            type="email"
            value={Correo}
            onChange={(e) => setCorreo(e.target.value)}
            placeholder="correo@ejemplo.com"
          />
        </div>
        <div className="grupo-formulario">
          <label>DNI</label>
          <input
            type="text"
            value={DNI}
            onChange={(e) => setDNI(e.target.value)}
            placeholder="Número de DNI"
          />
        </div>

        <div className="acciones-formulario">
          <button type="button" className="btn-admin secundario" onClick={handleCancelar}>
            Cancelar
          </button>
          <button type="submit" className="btn-admin verde">
            Guardar Cambios
          </button>
        </div>
      </form>
    </main>
  );
}

export default DatosUsuario;
