import React, { Component } from 'react';
import Aux from '../../hoc/Auxiliary';
import classes from './Layout.module.css';
import Toolbar from '../Navigation/Toolbar/Toolbar';
import SideDrawer from '../Navigation/SideDrawer/SideDrawer';

class Layout extends Component {
  state = {
    showBackdrop: true
  }

  BackdropCloseHandelr = () => {
    this.setState({showBackdrop: false})
  };
  
  render() {
    return(
        <Aux>
          <Toolbar />
          <SideDrawer open = {this.state.showBackdrop} 
            close = {this.BackdropCloseHandelr} />
          <main className={classes.Content}>
            {this.props.children}
          </main>
        </Aux>
    )
  }
   
};


export default Layout;