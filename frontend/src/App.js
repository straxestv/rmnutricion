import { BrowserRouter, Link, Route, Routes,Router } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import HomeScreen from './screens/HomeScreen';
import ProductScreen from './screens/ProductScreen';
//import Navbar from 'react-bootstrap/Navbar';
//import Badge from 'react-bootstrap/Badge';
//import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';
//import Container from 'react-bootstrap/Container';
import { LinkContainer } from 'react-router-bootstrap';
import { useContext, useEffect, useState } from 'react';
import { Store } from './Store';
//import CartScreen from './screens/CartScreen';
import SigninScreen from './screens/SigninScreen';
//import ShippingAddressScreen from './screens/ShippingAddressScreen';
import SignupScreen from './screens/SignupScreen';
//import PaymentMethodScreen from './screens/PaymentMethodScreen';
//import PlaceOrderScreen from './screens/PlaceOrderScreen';
//import OrderScreen from './screens/OrderScreen';
//import OrderHistoryScreen from './screens/OrderHistoryScreen';
import ProfileScreen from './screens/ProfileScreen';
//import Button from 'react-bootstrap/Button';
import { getError } from './utils';
import axios from 'axios';
//import SearchBox from './components/SearchBox';
import SearchScreen from './screens/SearchScreen';
import ProtectedRoute from './components/ProtectedRoute';
//import DashboardScreen from './screens/DashboardScreen';
import AdminRoute from './components/AdminRoute';
import ProductListScreen from './screens/ProductListScreen';
import ProductEditScreen from './screens/ProductEditScreen';
//import OrderListScreen from './screens/OrderListScreen';
import UserListScreen from './screens/UserListScreen';
import UserEditScreen from './screens/UserEditScreen';
//import MapScreen from './screens/MapScreen';
import Inicio from './screens/pages/Inicio';
//import logo from "./screens/styles/images/logo.png";
import Directorio from './screens/pages/Directorio';
import Contacto from './screens/pages/Contacto';
import CreateRutina from './screens/pages/CrearRutina';
import NotesList from './screens/pages/NotesList';
import ComponentLamb from './screens/pages/ComponentLamb';
import UserAdmInfo from './screens/pages/UserInfo';
import AdmUser from './screens/pages/AdmUser';
import Banner from './screens/Banner';

import esime from'./img/esime.png'
import IPN from'./img/ipn.png'

function App() {
  const { state, dispatch: ctxDispatch } = useContext(Store);
  const { fullBox, cart, userInfo } = state;

  const signoutHandler = () => {
    ctxDispatch({ type: 'USER_SIGNOUT' });
    localStorage.removeItem('userInfo');
    localStorage.removeItem('shippingAddress');
    localStorage.removeItem('paymentMethod');
    window.location.href = '/signin';
  };
  const [sidebarIsOpen, setSidebarIsOpen] = useState(false);
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const { data } = await axios.get(`/api/products/categories`);
        setCategories(data);
      } catch (err) {
        toast.error(getError(err));
      }
    };
    fetchCategories();
  }, []);
  return (
    <BrowserRouter>
      <div 
        className={
          sidebarIsOpen
            ? fullBox
              ? 'site-container active-cont d-flex flex-column full-box'
              : 'site-container active-cont d-flex flex-column'
            : fullBox
              ? 'site-container d-flex flex-column full-box'
              : 'site-container d-flex flex-column'
        }
      >
        
        <ToastContainer position="bottom-center" limit={1} />
        
        <div>
        <header>
        <nav id='Max'>
                <div className="container u-noPaddingContainer justify-content-center d-flex verdeH">
                    <div className="text-rigth barraGobmx-enlaces2">
                    <a className="navbar-brand"  href="https://www.gob.mx/">
                        <img src="https://www.esimez.ipn.mx/assets/files/main/img/template/logob.svg" height="29" alt="Página de inicio, Gobierno de México"/>
                    </a>
                        <a href="https://mivacuna.salud.gob.mx/" title="Registro para vacunación" className="nav-link">
                            Registro para vacunación
                        </a>  
                        <a href="https://coronavirus.gob.mx/" title="Informacion sobre COVID-19" className="nav-link">
                            Informacion sobre COVID-19
                        </a>                    
                        <a href="https://www.gob.mx/tramites" title="Trámites" className="nav-link">
                            Trámites
                        </a>
                        <a href="https://www.gob.mx/gobierno" title="Gobierno" className="nav-link">
                            Gobierno
                        </a>
                        <a href="https://www.gob.mx/segob/en" title="English" className="nav-link">
                            English
                        </a>
        
                        <a href="https://www.gob.mx/busqueda">
                        <span className="sr-only nav-link" >Búsqueda</span><i className="fas fa-search"></i>
                        </a>
                    </div>
                </div>
                <div className="row no-gutters ">
                    <div className="col-md-12 d-flex justify-content-center" id='blancoB'>
                        <div className="d-inline-block ipnLogo-enlace">
                            <a href="https://www.gob.mx/sep" className="">
                                <img src="https://www.esimez.ipn.mx/assets/files/main/img/template/pleca-educacion.svg" alt="Pleca de Gobierno" className="plecaGob gob"/>
                            </a>
                            <a href="https://www.ipn.mx" className="">
                                <img src="https://www.esimez.ipn.mx/assets/files/main/img/template/logo_ipn_guinda.svg" alt="Logo IPN" className="plecaIPN"/>
                                <p className="d-inline-block tituloLogo">
                                    Instituto Politécnico Nacional <br/>
                                    <span className="sm">"La Técnica al Servicio de la Patria"</span>
                                </p>
                            </a>
                        </div>
                    </div>
                </div>
            </nav>
        <nav className="navbar navbar-expand-md  header">
                <div className="container my-2">
                    <a href="https://www.esimez.ipn.mx/" className='text-white'>
                      <img src={esime} className="App-logo" alt="logo" />
                    </a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    {/* items */}
                    <div className="collapse navbar-collapse" id="navbarText">
                        <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                              
                                <Link className="nav-link text-white ms-3 my-1" to="/">Inicio</Link>
                            </li>
                            
                            
                            
                            <li className="nav-item">
                                <Link className="nav-link text-white ms-3 my-1" to="/Contacto">Contactanos</Link>
                            </li>

                            
                            <li className="nav-item header-links">
                            <a className="nav-link text-white ms-3 my-1"  href="https://www.esimez.ipn.mx/conocenos/directorio.html">Directorio</a>
                            </li>
                            <li className="nav-item">
                              
                            {userInfo ? (
                              
                                <NavDropdown title={userInfo.name} id="basic-nav-dropdown">
                                  <LinkContainer to="/profile">
                                    <NavDropdown.Item id='negro'>Detalles del perfil</NavDropdown.Item>
                                  </LinkContainer>
                                  
                                  <Link id='negro'className="dropdown-item" to="/contet">                                
                                    Inventario
                                  </Link>
                                  <NavDropdown.Divider />
                                  <Link  id='negro'
                                    className="dropdown-item"
                                    to="#signout"
                                    onClick={signoutHandler}
                                  >
                                    Cerrar sesión
                                  </Link>
                                </NavDropdown>

                                
                              ) : (
                                <Link className="nav-link" to="/signin">
                                  Iniciar sesión
                                </Link>
                              )}
                            
                            </li>
                            <li className="nav-item">
                            
                            </li>
                            <li className="nav-item">
                            {userInfo && userInfo.isAdmin && (
                              <div className="dropdown" id=''>
                                
                                <NavDropdown title="Admin" id="admin-nav-dropdown ">
                                  <LinkContainer  id='negro'to="/admin/users">
                                    <NavDropdown.Item>Usuarios</NavDropdown.Item>
                                  </LinkContainer>
                                  <LinkContainer  id='negro'to="/create">
                                    <NavDropdown.Item>Registro de datos</NavDropdown.Item>
                                  </LinkContainer>{/*
                                  <LinkContainer  id='negro'to="/AdmUser">
                                    <NavDropdown.Item>Usuarios</NavDropdown.Item>
                                  </LinkContainer>
                                  */}
                                </NavDropdown>
                              </div>
                            )}
                            </li>
                            
                            
                          
                        
                          </ul>
                          <a href="https://www.ipn.mx/" className='text-white'>
                      <img src={IPN} className="App-logo" alt="logo" />
                    </a>
                    </div>
                  </div>
                </nav>              
                
        </header>
        </div>
        <main>
          <div className="">
            <Routes>
              <Route path="/product/:slug" element={<ProductScreen />} />
              <Route path="/search" element={<SearchScreen />} />
              <Route path="/signin" element={<SigninScreen />} />
              <Route path="/signup" element={<SignupScreen />} />
              <Route path="/Contacto" element={<Contacto />} />
              <Route path="/contet"  element={<NotesList/>} />
              <Route path="/create"  element={<CreateRutina/>} />
              <Route path='/LaboratorioComp' element={<Directorio/>}/>
              <Route path="/edit/:id" element={<CreateRutina /> }></Route>
              <Route path="/admin/users" element={<AdmUser /> }></Route>
              
              <Route
                path="/profile"
                element={
                  <ProtectedRoute>
                    <ProfileScreen />
                  </ProtectedRoute>
                }
              />

              
              
              {/* Admin Routes */}
              
              
              
              <Route
                path="/admin/users"
                element={
                  <AdminRoute>
                    <UserListScreen />
                  </AdminRoute>
                }
              ></Route>
              UserAdmInfo
              <Route
                path="/admin/user/:id"
                element={
                  <AdminRoute>
                    <UserEditScreen />
                  </AdminRoute>
                }
              ></Route>
              <Route
                path="/UserAdmInfo/:email"
                element={
                  <AdminRoute>
                    <UserAdmInfo />
                  </AdminRoute>
                }
              ></Route>
              <Route
                path="/sAdmUser"
                element={
                  <AdminRoute>
                    <AdmUser />
                  </AdminRoute>
                }
              ></Route>
              <Route path="/" element={<Banner/>} />
              {/* <Route path="/" element={<Inicio/>} />*/}
            </Routes>
          </div>
        </main>
        <footer className="piePagina">

            <div className="bg--guinda">
                <div className="container">
                    <div className="row">
                       
                        <div className="col-lg-12 pl-7 piePagina-texto">
                            <h3 className="text-center piePagina-titulo">INSTITUTO POLITÉCNICO NACIONAL</h3>
                            <p>
                                D.R. Instituto Politécnico Nacional (IPN). Av. Luis Enrique Erro S/N, Unidad Profesional Adolfo López Mateos, Zacatenco, Alcaldía Gustavo A. Madero, C.P. 07738, Ciudad de México. Conmutador: 55 57 29 60 00 / 55 57 29 63 00.
                            </p>
                            
                            <p>
                                Esta página es una obra intelectual protegida por la Ley Federal del Derecho de Autor, puede ser reproducida con fines no lucrativos, siempre y cuando no se mutile, se cite la fuente completa y su dirección electrónica; su uso para otros fines, requiere autorización previa y por escrito de la Dirección General del Instituto.
                            </p>
                        </div>
                    </div>
                    <div className="row">
                          <div className="col-lg-12 pl-7">
                            <img src="https://www.esimez.ipn.mx/assets/files/main/img/template/educacion2.png" alt="SEP" className="EducacionplecaGob gob"/>
                         </div>
                    </div>
                </div>
            </div>

            <span id="top-contenedor">
                <a href="#" className="top-link" >
                    <i className="fas fa-chevron-up"></i>
                </a>
            </span>
       
        
        </footer>
        <footer className="main-footer">
            <div className="list-info">
                <div className="container">
                    <div className="row">
                        <div className="col-sm-3">
                            <img data-v-9e928f9a="" src="https://framework-gb.cdn.gob.mx/landing/img/logoheader.svg" href="/" alt="logo gobierno de mÃƒÂ©xico" className="logo_footer" />
                        </div>
                        <div className="col-sm-3">
                            <h5>Enlaces</h5>
                            <ul>
                                <li>
                                    <a href="https://participa.gob.mx" target="_blank" rel="noopener" title="Enlace abre en ventana nueva">
                                        Participa
                                    </a>
                                </li>
                                <li>
                                    <a href="https://www.gob.mx/publicaciones" target="_blank" rel="noopener" title="Enlace abre en ventana nueva">
                                        Publicaciones Oficiales
                                    </a>
                                </li>
                                <li>
                                    <a href="http://www.ordenjuridico.gob.mx" target="_blank" rel="noopener" title="Enlace abre en ventana nueva">
                                        Marco Jurídico
                                    </a>
                                </li>
                                <li>
                                    <a href="https://consultapublicamx.inai.org.mx/vut-web/" target="_blank" rel="noopener" title="Enlace abre en ventana nueva">
                                        Plataforma Nacional de Transparencia
                                    </a>
                                </li>
                                <li>
                                    <a href="https://alertadores.funcionpublica.gob.mx/" target="_blank" rel="noopener" title="Enlace abre en ventana nueva">
                                        Alerta
                                    </a>
                                </li>
                                <li>
                                    <a href="https://sidec.funcionpublica.gob.mx" target="_blank" rel="noopener" title="Enlace abre en ventana nueva">
                                        Denuncia
                                    </a>
                                </li>
                            </ul>
                        </div>        
                        <div className="col-sm-3">
                            <h5>¿Qué es gob.mx?</h5>
                            <p>
                                Es el portal único de trámites, información y participación ciudadana. 
                                <a href="https://www.gob.mx/que-es-gobmx">
                                    Leer más
                                </a>
                            </p>
                            <ul>
                                <li><a href="https://datos.gob.mx">
                                    Portal de datos abiertos
                                </a>
                            </li>
                            <li>
                                <a href="https://www.gob.mx/accesibilidad">
                                    Declaración de accesibilidad
                                </a>
                            </li>
                            <li>
                                <a href="https://www.gob.mx/privacidadintegral">
                                    Aviso de privacidad integral
                                </a>
                            </li>
                            <li>
                                <a href="https://www.gob.mx/privacidadsimplificado">
                                    Aviso de privacidad simplificado
                                </a>
                            </li>
                            <li>
                                <a href="https://www.gob.mx/terminos">
                                    Términos y Condiciones
                                </a>
                            </li>
                            <li>
                                <a href="https://www.gob.mx/terminos#medidas-seguridad-informacion">
                                    Política de seguridad
                                </a>
                            </li>
                            <li>
                                <a href="https://www.gob.mx/sitemap">
                                    Mapa de sitio
                                </a>
                            </li>
                        </ul>
                    </div>
                    <div className="col-sm-3">
                        <h5>
                            <a href="https://www.gob.mx/tramites/ficha/presentacion-de-quejas-y-denuncias-en-la-sfp/SFP54">
                                Denuncia contra servidores públicos
                            </a>
                        </h5>
                        <h5>
                            Síguenos en
                        </h5>
                        <ul className="list-inline">
                            <li>
                                <a target="_blank" rel="noopener" title="Enlace abre en ventana nueva" href="https://www.facebook.com/gobmexico">
                                    <img alt="Facebook" src="https://framework-gb.cdn.gob.mx/landing/img/facebook.png"/>
                                </a>
                            </li>
                            <li>
                                <a target="_blank" rel="noopener" title="Enlace abre en ventana nueva" href="https://twitter.com/GobiernoMX">
                                    <img alt="Twitter" src="https://framework-gb.cdn.gob.mx/landing/img/twitter.png"/>
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
        
        </footer>
      </div>
    </BrowserRouter>
  );
}

export default App;