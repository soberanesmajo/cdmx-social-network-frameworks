import React from 'react';
import { Navbar, NavItem} from 'react-materialize';
import './navbar.css';
import firebase from 'firebase';
import { Redirect } from 'react-router-dom';

// class navbarComp extends Component {
//   constructor () {
//     super ();
//     this.state = {user};

//   this.handleLogout = this.handleLogout.bind(this);

//   }

//   handleLogout () {
//     firebase.auth().signOut()
//     .then(result => <Redirect to = '/'/>)                        // console.log(`${result.user.email} ha cerrado sesión`)
//     .catch(error => console.log(`Error ${error.code}: ${error.message}`));
//   }

//   render () {
//     return (
//       <Navbar brand='InsideOut' right className = "navbar">
//         {/* <img src = {this.state.user.photoURl} alt = {this.user.displayName}/> */}
//         <NavItem onClick={() => console.log('test click')}>Perfil</NavItem>
//         <NavItem onClick = {this.handleLogout}>Cerrar Sesión</NavItem>
//       </Navbar>
//     )
//   }
// }

//   export default navbarComp;

const handleLogout = () => {
  console.log('holi');
  firebase.auth().signOut()
  .then(result => {
    <Redirect to = '/' />
    console.log(`Se ha cerrado sesión`)})
  .catch(error => console.log(`Error ${error.code}: ${error.message}`));


}
  



const navbarComp = () => 
  <Navbar brand='InsideOut' right className = "navbar">
    {/* <img src = {this.state.user.photoURl} alt = {this.user.displayName}/> */}
    <NavItem onClick={() => console.log('test click')}>Perfil</NavItem>
    <NavItem onClick = {handleLogout}>Cerrar Sesión</NavItem>
  </Navbar>

export default navbarComp;