import { useState } from 'react'
import Categorias from './PaginaPripal/Categorias'
import MasVendidos from './PaginaPripal/MasVendidos'
import Panel from './PaginaPripal/Panel'

function PaginaPrincipal(){
    return(
    <>
    <Panel/>
    <Categorias/>
    <MasVendidos/>
    </>
    );
}   


export default PaginaPrincipal