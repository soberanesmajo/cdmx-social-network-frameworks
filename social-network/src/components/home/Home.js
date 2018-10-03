import React from 'react';
// import { Navbar } from 'react-materialize';
import NavbarComp from '../navbar/Navbar';
import './home.css';
import Posts from '../posts/Posts';
import CardPrint from '../card/Card';


const Home = () => 
  <div className = "homeBack">
  <NavbarComp />
  <Posts />
  <CardPrint />
</div>
    


export default Home;