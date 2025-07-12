import '../ProductoCard/ProductoCard.css'

const ProductoCard = (props) => {
    return (
        <>
            <article className="producto-card-carrito">
                <div className="producto-imagen">
                    
                        <img src={props.img} alt={props.name} />
                    
                </div>
                <div className="producto-info">
                    <h3>{props.name}</h3>
                    <h4>Presentacion {props.presentacion}</h4>
                    <h5 className='llegada'>{props.fecha_de_llegada}</h5>
                    
                </div>
                <div className='precio_y_cantidad'>
                <h4 className="precio">S/{props.precio}</h4>
                 <br />
                 <br />
                <div className="cantidad">
                        <button>-</button>
                        <span>{props.cantidad}</span>
                        <button>+</button>
                </div>
                </div>
            </article>
            <hr className="producto-separador" />
        </>
    );
}

export default ProductoCard;

