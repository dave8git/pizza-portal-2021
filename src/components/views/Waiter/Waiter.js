import React from 'react';
import PropTypes from 'prop-types';
import styles from './Waiter.module.scss';

const Waiter = (props) => (
  <div className={styles.component}>
    <h2>Waiter</h2>
    <Link to={`${process.env.PUBLIC_URL}/waiter/order/new`} activeClassName='active'>new order</Link>
    <Link to={`${process.env.PUBLIC_URL}/waiter/order/:id`} activeClassName='active'>new order #id</Link>
  </div>
);

export default Waiter;