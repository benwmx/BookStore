import React from 'react';
import { NavLink } from 'react-router-dom';
import { FaUserAlt } from 'react-icons/fa';
import Styles from './NavBar.module.scss';

const NavBar = () => (
  <header className={Styles.navbar}>
    <div className={Styles.brandLinksContainer}>
      <h1 className={Styles.brand}>Bookstore CMS</h1>
      <NavLink to="/" activeClassName={Styles.activeLink} exact>
        Books
      </NavLink>
      <NavLink to="/categories" activeClassName={Styles.activeLink} exact>
        Categories
      </NavLink>
    </div>
    <div className={Styles.user}>
      <FaUserAlt />
    </div>
  </header>
);

export default NavBar;
