import './CheckoutMetodoPago.css';

function CheckoutMetodoPago({ cambiarVista }){
  return (
    <div className="contenedor-checkout">
      <h1 className="titulo-checkout">Checkout</h1>
      <h3 className="subtitulo">Método de pago</h3>

      <div className="checkout-layout">
        {/* Sección de métodos de pago */}
        <div className="metodo-pago">
          {/* Generar QR */}
          <div className="qr-section opcion">
            <label className="radio-label">
              <input type="radio" name="metodoPago" defaultChecked />
              <span className="radio-custom"></span>
              <span className="opcion-text">Generar QR</span>
            </label>
            <img
              src="https://static.wixstatic.com/media/acd37e_a369e2bfb66446a4b82545cb4772b2c4~mv2.png/v1/fill/w_472,h_287,al_c,q_85,enc_auto/Stellar-qr-code_153791-1052.png"
              alt="Código QR"
            />
            <p>Escanea el código para pagar</p>
          </div>

          {/* Tarjetas y Transferencias */}
          <div className="tarjetas-section opcion">
            <label className="radio-label">
              <input type="radio" name="metodoPago" />
              <span className="radio-custom"></span>
              <span className="opcion-text">Tarjetas y Transferencias</span>
            </label>
            <img
              src="https://sistemahost.com/images/metodos-pago.png"
              alt="Métodos de pago"
            />
          </div>
        </div>

        {/* Sección de resumen de compra */}
        {/* Resumen de la Compra */}
        <div className="checkout-resumen-metodopago">
          <h3>Resumen de la compra</h3>
          <div className="resumen-detalles">
            <p className="productos">
              Productos (10) - <strong>S/119.00</strong>
            </p>
            <p className="delivery">
              Delivery - <strong>GRATIS</strong>
            </p>
            <p className="descuentos">
              Descuentos - <strong>-S/9.00</strong>
            </p>
            <hr />
            <p className="total-pago">
              Total - <strong>S/100.00</strong>
            </p>
          </div>
          <button className="btn-pago">Seleccionar método de pago</button>
        </div>
      </div>
    </div>
  );
};

export default CheckoutMetodoPago;
