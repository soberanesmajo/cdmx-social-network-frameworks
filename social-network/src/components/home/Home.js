import React, {Component} from 'react';
import NavbarComp from '../navbar/Navbar';
import './home.css';
import Posts from '../posts/Posts';
import Cardprint from '../card/Card';


class Home extends Component {
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
export default Home;