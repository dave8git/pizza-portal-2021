import React from 'react';
import PropTypes from 'prop-types';
//import styles from './MyComponent.scss';
import PageNav from '../PageNav/PageNav';
import AppBar from '@material-ui/core/AppBar';
import Box from '@material-ui/core/Box';
import Toolbar from '@material-ui/core/Toolbar';
import Container from '@material-ui/core/Container';

const MainLayout = (props) => (
  <div className="MainLayout">
    <AppBar>
      <Container maxWidth="lg">
        <Toolbar disableGutters>
          <PageNav />
        </Toolbar>
      </Container>
    </AppBar>
    <Container maxWidth='lg'>
      <Toolbar />
      {props.children}
    </Container>
  </div>
);

MainLayout.propTypes = {
  children: PropTypes.node,
};

export default MainLayout;