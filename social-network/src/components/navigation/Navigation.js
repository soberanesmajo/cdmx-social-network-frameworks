import React from 'react';
import { Link } from 'react-router-dom';

const Navigation = () =>
  <div>
    <ul>
      <li><Link to = '/'>Login</Link></li>
      <li><Link to = '/signup'>Sign Up</Link></li>
      <li><Link to = '/home'>Home</Link></li>
      <li><Link to = '/profile'>Profile</Link></li>
    </ul>
  </div>

export default Navigation;
