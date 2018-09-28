import React from 'react';
import { Navbar, NavItem} from 'react-materialize';
import './navbar.css';

const navbarComp = () => 
  <Navbar brand='InsideOut' right className = "navbar">
    <NavItem onClick={() => console.log('test click')}>Perfil</NavItem>
    <NavItem href='components.html'>Cerrar Sesión</NavItem>
  </Navbar>

export default navbarComp;
