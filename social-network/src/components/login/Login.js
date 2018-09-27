import React, { Component } from 'react';
import firebase from 'firebase';
import './Login.css';
import { Row, Input } from 'react-materialize';
// import { Link } from 'react-router-dom';
// import routes from '../../routes/routes';
// import Navigation from '../navigation/Navigation';


class Login extends Component { // clase padre component
  constructor () {
    super (); 
    this.state = {
      user: null
    };

    this.handleAuth = this.handleAuth.bind(this);
    this.handleLogout = this.handleLogout.bind(this);
    // this.renderLoginButton = this.renderLoginButton.bind(this);
  }

  componentWillMount () { // componente de ciclo de vida
    firebase.auth().onAuthStateChanged(user => { // observador de firebase
      this.setState ({user}); // si la cable y el valor en un objeto son iguales se escribe una única vez
    });
  }

  handleAuth () {
    const provider = new firebase.auth.GoogleAuthProvider();

    firebase.auth().signInWithPopup(provider)
    .then(result => console.log(`${result.user.email} ha iniciado sesión`))
    .catch(error => console.log(`Error ${error.code}: ${error.message}`));
    // if (this.state.user) {
    //   <Link to = {routes.HOME}>Home</Link>
    // }
  }

  handleLogout () {
    firebase.auth().signOut()
    .then(result => console.log(`${result.user.email} ha cerrado sesión`))
    .catch(error => console.log(`Error ${error.code}: ${error.message}`));
  }

  // renderLoginButton () {
  //   if (this.state.user) {
  //     return (
  //       <div>
  //         <img width = "100" src= {this.state.user.photoURL} alt = {this.state.user.displayName} />
  //         <p> Hola {this.state.user.displayName}!</p>
  //         <button onClick= {this.handleLogout}>Salir</button>
  //       </div>
  //     );
  //   } else {
  //     return (
  //     <button onClick = {this.handleAuth}>Iniciar sesión con Google</button>
  //     );
  //   }
  // }

  render () {
    return (
      <Row className ="login">  
        <h2>InsideOut</h2>
          <Input s={6} label="First Name" />
          <Input s={6} label="Last Name" />
          <Input type="email" label="Email" s={12} />
          <Input type="password" label="password" s={12} />
          <button onClick = {this.handleAuth}>Iniciar sesión con Google</button>
      </Row>
    );
  }
}

export default Login;

{/* <div className="Login-intro">
              {this.renderLoginButton()}
            </div> */}