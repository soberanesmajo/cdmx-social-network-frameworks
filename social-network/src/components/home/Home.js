import React from 'react';
// import { Navbar } from 'react-materialize';
import NavbarComp from '../navbar/Navbar';
import './home.css';
import TextTarea from '../textarea/Textarea';
import CardPrint from '../card/Card';


const Home = () => 
  <div className = "homeBack">
  <NavbarComp />
  <TextTarea />
  <CardPrint />
  <h3>Holi este pretende ser el muro</h3>
</div>
    


export default Home;