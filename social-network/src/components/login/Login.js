import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import firebase from 'firebase';
import './Login.css';
import { Row, Input, Button } from 'react-materialize';

class Login extends Component { // clase padre component
  constructor () {
    super (); 
    this.state = {
      user: null
    };

    this.handleAuth = this.handleAuth.bind(this);
    // this.handleLogout = this.handleLogout.bind(this);
    this.redirectIfIsAuth = this.redirectIfIsAuth.bind(this);
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
  }

  // handleLogout () {
  //   firebase.auth().signOut()
  //   .then(result => console.log(`${result.user.email} ha cerrado sesión`))
  //   .catch(error => console.log(`Error ${error.code}: ${error.message}`));
  // }

  redirectIfIsAuth () {
    if (this.state.user) {
    return (
      <Redirect to = '/home' />
    )
    } else {
      return (
        <div className = "container">
          <h2>InsideOut</h2>
            <Row className ="login">  
                <Input type="email" label="Email" s={12} />
                <Input type="password" label="password" s={12} />
            </Row>
            <Row className = "googleBtn">
            <Button onClick = {this.handleAuth} waves='light'>Iniciar sesión con Google</Button>
            </Row>
        </div>
      )
    }
  }

  render () {
    return (
      <div>
        {this.redirectIfIsAuth()}
      </div>
    );
  }

}

export default Login;