import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useState } from 'react';
import Header from './components/Header';
import NavbarAdmin from './components/PaginaAdmin/NavbarAdmin';
import NavbarUser from './components/PaginaUser/NavbarUser';
import DashboardAdmin from './components/PaginaAdmin/DashboardAdmin';
import ListaProductos from './components/PaginaAdmin/ListaProductos';
import AgregarProducto from './components/PaginaAdmin/AgregarProducto';
import DetalleProducto from './components/PaginaAdmin/DetalleProducto';
import ListadoDeUsuarios from './components/PaginaAdmin/ListadoDeUsuarios';
import ListadoDeOrdenes from './components/PaginaAdmin/ListadoDeOrdenes';
import DetalleOrden from './components/PaginaAdmin/DetalleOrden';
import DetalleUsuario from './components/PaginaAdmin/DetalleUsuario';
import ListadoCategorias from './components/PaginaAdmin/ListadoCategorias';
import Footer from './components/Footer';
import PaginaPrincipal from './components/PaginaUser/PaginaPrincipal';
import Login from './components/PaginaUser/Login';
import Registro from './components/PaginaUser/Registro';
import Recuperarcontraseña from './components/PaginaUser/RecuperarContraseña';
import ContenidoUsuario from './components/PaginaUser/OrdenUsuario';
import Todo from './Todo';
import Carrito from './components/PaginaUser/Carrito/Carrito';
import Checkout from './components/PaginaUser/Checkout/Checkout';
import CheckoutMetodoPago from './components/PaginaUser/CheckoutMetodoPago/CheckoutMetodoPago';
import CheckoutPago1 from './components/PaginaUser/CheckoutPago1/CheckoutPago1';
import CheckoutPago2 from './components/PaginaUser/CheckoutPago2/CheckoutPago2';
import PedidoCompleto from './components/PaginaUser/PedidoCompleto/PedidoCompleto';
import ProductosxCategoria from './components/PaginaUser/Categorias/ProductosxCategoria';
import ProductoEspecifico from './components/PaginaUser/ProductoEspecifico';
import CambiarContrasena from './components/PaginaUser/Cambiarcontrasena';
import DatosUsuario from './components/PaginaUser/DatosUsuario';
import AgregarCategoria from './components/PaginaAdmin/AgregarCategoria';
import Categorias from './components/PaginaUser/PaginaPripal/Categorias';

function App() {
  const [isAdminMode, setIsAdminMode] = useState(false);

  const renderNavbar = () => {
    return isAdminMode ? <NavbarAdmin /> : <NavbarUser />;
  };

  return (
    <Router>
      <div className="app-container">
        <Header setIsAdminMode={setIsAdminMode} />
        {renderNavbar()}
        
        <main className="main-content">
          <Routes>
            {/* Rutas Públicas */}
            <Route path="/" element={<PaginaPrincipal />} />
            <Route path="/login" element={<Login />} />
            <Route path="/registro" element={<Registro />} />
            <Route path="/recuperar-contrasena" element={<Recuperarcontraseña />} />
            <Route path="/todo" element={<Todo />} />
            <Route path="/carrito" element={<Carrito />} />
            <Route path="/checkout" element={<Checkout />} />
            <Route path="/checkout/metodo-pago" element={<CheckoutMetodoPago />} />
            <Route path="/checkout/metodo-pago/pago-1" element={<CheckoutPago1 />} />
            <Route path="/checkout/metodo-pago/pago-2" element={<CheckoutPago2 />} />
            <Route path="/pedido-completo" element={<PedidoCompleto />} />
            <Route path="/categorias" element={<Categorias />} />
            <Route path="/categorias/:id" element={<ProductosxCategoria />} />
            <Route path="/productos" element={<ProductoEspecifico />} />
            <Route path="/productos/:id" element={<ProductoEspecifico />} />
            <Route path="/cambiar-contrasena" element={<CambiarContrasena />} />
            <Route path="/mis-datos" element={<DatosUsuario />} />
            <Route path="/mis-ordenes" element={<ContenidoUsuario />} />
            
            
            {/* Rutas de Administración */}
            <Route path="/admin" element={<DashboardAdmin />} />
            <Route path="/admin/productos" element={<ListaProductos />} />
            <Route path="/admin/agregar-producto" element={<AgregarProducto />} />
            <Route path="/admin/producto/:id" element={<DetalleProducto />} />
            <Route path="/admin/usuarios" element={<ListadoDeUsuarios />} />
            <Route path="/admin/usuarios/:id" element={<DetalleUsuario />} />
            <Route path="/admin/ordenes" element={<ListadoDeOrdenes />} />
            <Route path="/admin/ordenes/:id" element={<DetalleOrden />} />
            <Route path="/admin/categorias" element={<ListadoCategorias />} />
            <Route path="/admin/agregar-categoria" element={<AgregarCategoria />} />
          </Routes>
        </main>
        
        <Footer />
      </div>
    </Router>
  );
}

export default App;