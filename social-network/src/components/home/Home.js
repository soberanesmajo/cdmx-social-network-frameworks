import React, {Component} from 'react';
// import { Navbar } from 'react-materialize';
import NavbarComp from '../navbar/Navbar';
import './home.css';
import Posts from '../posts/Posts';
import Cardprint from '../card/Card';


class Home extends Component {
  // constructor (props) {
  //     super (props);
  // }

  render () {
    console.log(this.props);
    return (
      <div className = "homeBack">
        <NavbarComp />
        <Posts />
        <Cardprint db={this.props.db}/>
      </div>
    )
  }
} 
//   <div className = "homeBack">
//   <NavbarComp />
//   <Posts />
//   <CardPrint />
// </div>
    


export default Home;

// user = {this.props.user}