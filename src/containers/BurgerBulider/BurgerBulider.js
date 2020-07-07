import React, { Component } from 'react';
import Aux from '../../hoc/Auxiliary';
import Burger from '../../components/Burger/Burger';


class BurgerBulider extends Component {
  state = {
    ingredients: {
      bacon: 0,
      cheese: 0,
      meat: 0,
      salad: 0
    }
  };
  render() {
    return (
      <Aux>
        <Burger ingredients = {this.state.ingredients} />
        <div>Bulid Controles</div>
      </Aux>
    );
  }
}

export default BurgerBulider;