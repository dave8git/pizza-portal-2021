import React from 'react';
import PropTypes from 'prop-types';
//import styles from './MyComponent.scss';
import PageNav from '../PageNav/PageNav';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';

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