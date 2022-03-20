import React from 'react';
import PropTypes from 'prop-types';
import styles from './PageNav.module.scss';

const PageNav = () => (
  <nav className={styles.component}>
    <NavLink exact to={`${process.env.PUBLIC_URL}/`} activeClassName='active'>Home</NavLink>
    <NavLink to={`${process.env.PUBLIC_URL}/kitchen`} activeClassName='active'>Kithen</NavLink>
    <NavLink to={`${process.env.PUBLIC_URL}/login`} activeClassName='active'>Login</NavLink>
    <NavLink to={`${process.env.PUBLIC_URL}/tables`} activeClassName='active'>Tables</NavLink>
    <NavLink to={`${process.env.PUBLIC_URL}/waiter`} activeClassName='active'>Waiter</NavLink>
  </nav>
);

export default PageNav;