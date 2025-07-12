


function Footer() {
  return(
    <footer className="footer">
      <div className="footer-separacion">
        <div className="footer-col">
          <h4>Síguenos</h4>
            <div className="iconos-redes">
                <span><img src="img/fb.svg" /></span>
                <span><img src="img/x_icon_white.svg" /></span>
                <span><img src="img/yt.svg" /></span>
                <span><img src="img/ig_icon_white.svg" /></span>
          </div>
        </div>
        <div className="footer-texto">
          <h4>Nosotros</h4>
          <ul>
            <li>Conócenos</li>
            <li>Responsabilidad social</li>
            <li>Nuestras tiendas</li>
          </ul>
        </div>
        <div className="footer-texto">
          <h4>Atención al cliente</h4>
          <ul>
            <li>Atención al cliente</li>
            <li>Horario de atención</li>
            <li>Preguntas frecuentes</li>
          </ul>
        </div>
        <div className="footer-texto">
          <h4>Políticas y condiciones</h4>
          <ul>
            <li>Políticas de datos personales</li>
            <li>Condición de promociones</li>
            <li>Términos y condiciones</li>
          </ul>
        </div>
      </div>
    </footer>
  );
}

export default Footer