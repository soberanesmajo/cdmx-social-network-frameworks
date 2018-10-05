import React, {Component} from 'react';
import firebase from 'firebase';
import { Input, Button } from 'react-materialize';
import './posts.css';
import db from '../../index';

class Posts extends Component {
  constructor () {
    super ();
    this.state = {
      post: ''
    };
  }

  updateInput = (e) => { // usar arrow function evita usar bind.
    this.setState ({
      [e.target.name] : e.target.value
    });
  }

  addPost = (e) => {
    e.preventDefault();
    // const db = firebase.firestore();
    // db.settings ({
    //   timestampsInSnapshots : true
    // });
   const userRef = db.collection('posts').add ({
     post : this.state.post
   });
    this.setState({
      post: ''
    });
  }

  render () {
    return (
      <div className = 'container'>
        <form onSubmit = {this.addPost}>
          <Input id = 'input' type= 'text' name = 'post' placeholder="¿Qué estás pensando?" onChange = {this.updateInput} value = {this.state.post}/>
          <Button type= 'submit' waves='light'>Publicar</Button>
        </form>
      </div>
    )
  }
}

export default Posts;