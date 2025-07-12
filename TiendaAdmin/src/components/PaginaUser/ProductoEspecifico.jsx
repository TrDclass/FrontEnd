import { useState } from 'react'
import DescripcionProducto from './ProductoEspecifico/DescripcionProducto'
import MasVendidos from './PaginaPripal/MasVendidos'

function ProductoEspecifico(){
    return(
    <>
    <DescripcionProducto/>
    <MasVendidos/>
    </>
    );
}   


export default ProductoEspecifico