import './CheckoutPago1.css';

function CheckoutPago1({ cambiarVista }){
  return (
    <div className="contenedor-checkout">
      <h1 className="titulo">Checkout</h1>
      <h3 className="subtitulo">Método de pago</h3>

      <div className="checkout-layout">
        {/* Sección izquierda: Método de pago */}
        <div className="metodo-pago">
          <h3 className="metodo-titulo">Escanear QR</h3>
          <div className="qr-container">
    
            <img src="https://rootear.com/files/2015/07/qr.jpg" alt="Código QR" className="qr-imagen" />
            <p className="qr-tiempo">Válido por 05:00 minutos</p>
          </div>
          <button className="btn-ya-pague">Ya realicé el pago</button>
        </div>

        {/* Sección derecha: Resumen de compra */}
        <div className="resumen-compra">
        <h3>Resumen de Compra</h3>
        <div className="resumen-detalles">
        <p className="productos">Productos  - <strong>S/119.00</strong></p>
        <p className="delivery">Delivery - <strong>GRATIS</strong></p>
        <p className="ddescuentos">Descuentos - <strong>-S/9.00</strong></p>
        <hr />
        <p className="total-pago">Total - <strong>S/100.00</strong></p>
        </div>
        
        </div>
      </div>
    </div>
  );
};

export default CheckoutPago1;
