import React, { Component } from 'react';
import Aux from '../../hoc/Auxiliary/Auxiliary';
import classes from './Layout.module.css';
import Toolbar from '../../components/Navigation/Toolbar/Toolbar';
import SideDrawer from '../../components/Navigation/SideDrawer/SideDrawer';

class Layout extends Component {
  state = {
    showBackdrop: false
  }

  drawerToggleHandler = () => {
    this.setState({showBackdrop: true})
  }

  BackdropCloseHandler = () => {
    this.setState({showBackdrop: false})
  };
  
  render() {
    return(
        <Aux>
          <Toolbar toggleContral={this.drawerToggleHandler} />
          <SideDrawer open = {this.state.showBackdrop} 
            close = {this.BackdropCloseHandler} />
          <main className={classes.Content}>
            {this.props.children}
          </main>
        </Aux>
    )
  }
   
};


export default Layout;