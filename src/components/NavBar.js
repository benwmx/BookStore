import React from 'react';
import { NavLink } from 'react-router-dom';

const NavBar = () => (
  <header>
    <h1>Bookstore CMS</h1>
    <NavLink to="/" activeClassName="activeLink" exact>
      Books
    </NavLink>
    <NavLink to="/categories" activeClassName="activeLink" exact>
      Categories
    </NavLink>
  </header>
);

export default NavBar;
