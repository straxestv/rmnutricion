import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import HomeScreen from './screens/HomeScreen';
import ProductScreen from './screens/ProductScreen';
import Navbar from 'react-bootstrap/Navbar';
import Badge from 'react-bootstrap/Badge';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Container from 'react-bootstrap/Container';
import { LinkContainer } from 'react-router-bootstrap';
import { useContext, useEffect, useState } from 'react';
import { Store } from './Store';
import CartScreen from './screens/CartScreen';
import SigninScreen from './screens/SigninScreen';
import ShippingAddressScreen from './screens/ShippingAddressScreen';
import SignupScreen from './screens/SignupScreen';
import PaymentMethodScreen from './screens/PaymentMethodScreen';
import PlaceOrderScreen from './screens/PlaceOrderScreen';
import OrderScreen from './screens/OrderScreen';
import OrderHistoryScreen from './screens/OrderHistoryScreen';
import ProfileScreen from './screens/ProfileScreen';
import Button from 'react-bootstrap/Button';
import { getError } from './utils';
import axios from 'axios';
import SearchBox from './components/SearchBox';
import SearchScreen from './screens/SearchScreen';
import ProtectedRoute from './components/ProtectedRoute';
import DashboardScreen from './screens/DashboardScreen';
import AdminRoute from './components/AdminRoute';
import ProductListScreen from './screens/ProductListScreen';
import ProductEditScreen from './screens/ProductEditScreen';
import OrderListScreen from './screens/OrderListScreen';
import UserListScreen from './screens/UserListScreen';
import UserEditScreen from './screens/UserEditScreen';
import MapScreen from './screens/MapScreen';
import Inicio from './screens/pages/Inicio';
import logo from "./screens/styles/images/logo.png";

import Acercade from './screens/pages/Acercade';
import Contacto from './screens/pages/Contacto';
import NotesList from './screens/pages/NotesList';
import CreateNote from './screens/pages/CreateNote';
import UserAdmInfo from './screens/pages/UserInfo';
import AdmUser from './screens/pages/AdmUser';


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
        
        <header>
        <nav className="navbar navbar-expand-md bg-black navbar-dark ">
                <div className="container my-2">
                    <Link to="/" className='text-white'>
                        <img src={logo}  className='logo'alt="" />
                    </Link>
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
                                <Link className="nav-link text-white ms-3 my-1" to="/category">Productos</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link text-white ms-3 my-1" to="/Acercade">Acerca de</Link>
                            </li>
                            
                            <li className="nav-item">
                                <Link className="nav-link text-white ms-3 my-1" to="/Contacto">Contacto</Link>
                            </li>

                            
                            <li className="nav-item header-links">
                            <Link  className="nav-link text-white ms-3 my-1" to="/cart">Carrito</Link>
                            </li>
                            <li className="nav-item">
                              
                            {userInfo ? (
                                <NavDropdown title={userInfo.name} id="basic-nav-dropdown">
                                  <LinkContainer to="/profile">
                                    <NavDropdown.Item id='negro'>User Profile</NavDropdown.Item>
                                  </LinkContainer>
                                  <LinkContainer to="/orderhistory">
                                    <NavDropdown.Item id='negro'>Order History</NavDropdown.Item>
                                  </LinkContainer>
                                  <NavDropdown.Divider />
                                  <Link  id='negro'
                                    className="dropdown-item"
                                    to="#signout"
                                    onClick={signoutHandler}
                                  >
                                    Sign Out
                                  </Link>
                                </NavDropdown>
                              ) : (
                                <Link className="nav-link" to="/signin">
                                  Sign In
                                </Link>
                              )}
                            
                            </li>
                            <li className="nav-item">
                            
                            </li>
                            <li className="nav-item">
                            {userInfo && userInfo.isAdmin && (
                              <div className="dropdown" id='blanco'>
                                
                                <NavDropdown title="Admin" id="admin-nav-dropdown ">
                                  <LinkContainer  id='negro' to="/admin/dashboard">
                                    <NavDropdown.Item>Dashboard</NavDropdown.Item>
                                  </LinkContainer>
                                  <LinkContainer  id='negro' to="/admin/products">
                                    <NavDropdown.Item>Products</NavDropdown.Item>
                                  </LinkContainer>
                                  <LinkContainer  id='negro'to="/admin/orders">
                                    <NavDropdown.Item>Orders</NavDropdown.Item>
                                  </LinkContainer>
                                  <LinkContainer  id='negro'to="/admin/users">
                                    <NavDropdown.Item>Users</NavDropdown.Item>
                                  </LinkContainer>
                                  <LinkContainer  id='negro'to="/create">
                                    <NavDropdown.Item>Crear dieta</NavDropdown.Item>
                                  </LinkContainer>{/*
                                  <LinkContainer  id='negro'to="/AdmUser">
                                    <NavDropdown.Item>Usuarios</NavDropdown.Item>
                                  </LinkContainer>
                                  */}
                                </NavDropdown>
                              </div>
                            )}
                            </li>
                            <li className="nav-item " >
                            {userInfo && userInfo.isSuscp && (
                              <div className="dropdown">
                                <Link  to="/contet">                                
                                  <button id='but-2' type="button" className="btn btn-secondary rounded-pill ms-3 my-1 ">Contenido Exclusivo</button> 
                                </Link>
                                <Link  to="/VideosScreen">                                
                                  <button id='but-2' type="button" className="btn btn-secondary rounded-pill ms-3 my-1 ">Videos</button> 
                                </Link>
                                
                              </div>
                            )}
                            
                            </li>
                            
                          
                        
                          </ul>
                    </div>
                  </div>
                </nav>              
                
        </header>
        <main>
          <div className="">
            <Routes>
              <Route path="/product/:slug" element={<ProductScreen />} />
              <Route path="/cart" element={<CartScreen />} />
              <Route path="/search" element={<SearchScreen />} />
              <Route path="/signin" element={<SigninScreen />} />
              <Route path="/signup" element={<SignupScreen />} />
              <Route path="/category" element={<HomeScreen />} />Contacto
              <Route path="/Acercade" element={<Acercade />} />
              <Route path="/Contacto" element={<Contacto />} />
              <Route path="/contet"  element={<NotesList/>} />
              

              <Route
                path="/profile"
                element={
                  <ProtectedRoute>
                    <ProfileScreen />
                  </ProtectedRoute>
                }
              />
              <Route
                path="/map"
                element={
                  <ProtectedRoute>
                    <MapScreen />
                  </ProtectedRoute>
                }
              />
              <Route path="/placeorder" element={<PlaceOrderScreen />} />
              <Route
                path="/order/:id"
                element={
                  <ProtectedRoute>
                    <OrderScreen />
                  </ProtectedRoute>
                }
              ></Route>
              <Route
                path="/orderhistory"
                element={
                  <ProtectedRoute>
                    <OrderHistoryScreen />
                  </ProtectedRoute>
                }
              ></Route>
              <Route
                path="/shipping"
                element={<ShippingAddressScreen />}
              ></Route>
              <Route path="/payment" element={<PaymentMethodScreen />}></Route>
              {/* Admin Routes */}
              <Route
                path="/admin/dashboard"
                element={
                  <AdminRoute>
                    <DashboardScreen />
                  </AdminRoute>
                }
              ></Route>
              <Route
                path="/create"
                element={
                  <AdminRoute>
                    <CreateNote />
                  </AdminRoute>
                }
              ></Route>
              <Route
                path="/admin/orders"
                element={
                  <AdminRoute>
                    <OrderListScreen />
                  </AdminRoute>
                }
              ></Route>
              <Route
                path="/admin/users"
                element={
                  <AdminRoute>
                    <UserListScreen />
                  </AdminRoute>
                }
              ></Route>
              <Route
                path="/admin/products"
                element={
                  <AdminRoute>
                    <ProductListScreen />
                  </AdminRoute>
                }
              ></Route>
              <Route
                path="/admin/product/:id"
                element={
                  <AdminRoute>
                    <ProductEditScreen />
                  </AdminRoute>
                }
              ></Route>UserAdmInfo
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
                path="/AdmUser"
                element={
                  <AdminRoute>
                    <AdmUser />
                  </AdminRoute>
                }
              ></Route>
              <Route path="/" element={<Inicio/>} />
              {/*<Route path="/" element={<HomeScreen />} />*/}
            </Routes>
          </div>
        </main>
        <footer>
          <div className="text-center">Todos los derechos reservados(c)</div>
        </footer>
      </div>
    </BrowserRouter>
  );
}

export default App;