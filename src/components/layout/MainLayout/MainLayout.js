import React from 'react';
import PropTypes from 'prop-types';
//import styles from './MyComponent.scss';
import PageNav from '../PageNav/PageNav';
import AppBar from '@material-ui/material/AppBar';
import Box from '@material-ui/material/Box';
import Toolbar from '@material-ui/material/Toolbar';

const MainLayout = (props) => (
  <div className="MainLayout">
    <AppBar>
      <Toolbar>
        <PageNav />
      </Toolbar>
    </AppBar>
    
    {props.children}
  </div>
);

MainLayout.propTypes = {
  children: PropTypes.node,
};

export default MainLayout;