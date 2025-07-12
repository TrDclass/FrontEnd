import "./CheckoutPago2.css";

function CheckoutPago2({ cambiarVista }){  return (
    <div className="checkout-container">
      {/* Encabezado superior */}
      <div className="checkout-header">
        <h1>Checkout</h1>
        <h3>Método de pago</h3>
      </div>

      {/* Contenido principal: dos secciones */}
      <div className="checkout-body">
        {/* Sección izquierda: Datos de pago */}
        <div className="left-section">
          <div className="card-image-container">
            <img
              src="https://th.bing.com/th/id/R.e2e26ea9db661b5e0fd104f63fcc67de?rik=nHVsFnEvUywvRA&riu=http%3a%2f%2fcfs15.tistory.com%2fimage%2f6%2ftistory%2f2008%2f10%2f24%2f00%2f26%2f490097a4b4524&ehk=0nacWRPsY3OmxlXKSwWqbbiCtXM66LT74z8njB4A%2bec%3d&risl=&pid=ImgRaw&r=0tarjeta.png"
              alt="Tarjeta de crédito"
              className="card-image"
            />
          </div>

          <form className="payment-form">
            <div className="form-group">
              <label htmlFor="cardNumber">Número de la tarjeta</label>
              <input
                type="text"
                id="cardNumber"
                placeholder="4575656857856787"
              />
            </div>
            <div className="form-group">
              <label htmlFor="cardName">Nombre</label>
              <input type="text" id="cardName" placeholder="JUMI BLANCARTE" />
            </div>
            <div className="form-group">
              <label htmlFor="cardExpiry">Fecha de expiración</label>
              <input type="text" id="cardExpiry" placeholder="10/20" />
            </div>
            <div className="form-group">
              <label htmlFor="cardCVC">CVC</label>
              <input type="text" id="cardCVC" placeholder="123" />
            </div>
            <button type="submit" className="btn-pagar">Pagar</button>
          </form>
        </div>

        {/* Sección derecha: Resumen de la compra */}
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

export default CheckoutPago2;
