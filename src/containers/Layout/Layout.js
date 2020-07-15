import React, { Component } from 'react';
import Aux from '../../hoc/Auxiliary/Auxiliary';
import classes from './Layout.module.css';
import Toolbar from '../../components/Navigation/Toolbar/Toolbar';
import SideDrawer from '../../components/Navigation/SideDrawer/SideDrawer';

class Layout extends Component {
  state = {
    showBackdrop: false
  }

  drawerToggleHandelr = () => {
    this.setState({showBackdrop: true})
  }

  BackdropCloseHandelr = () => {
    this.setState({showBackdrop: false})
  };
  
  render() {
    return(
        <Aux>
          <Toolbar toggleContral={this.drawerToggleHandelr} />
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