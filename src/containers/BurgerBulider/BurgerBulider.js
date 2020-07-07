import React, { Component } from 'react';
import Aux from '../../hoc/Auxiliary';
import Burger from '../../components/Burger/Burger';
import BuildControls from '../../components/Burger/BuildControls/BuildControls';

const INGREDIENT_PRICES = {
  meat: 1.3,
  salad: 0.2,
  bacon: 0.7,
  cheese: 0.4
};

class BurgerBulider extends Component {
  state = {
    ingredients: {
      bacon: 0,
      cheese: 0,
      meat: 0,
      salad: 0
    },
    totalPrice: 3
  };

  addIngredientHandelr = (type) => {
    const oldCount = this.state.ingredients[type];
    const updateCount = oldCount + 1 ; 
    const updateIngredients = {
      ...this.state.ingredients
    }
    updateIngredients[type] = updateCount;

    const oldPrice = this.state.totalPrice;
    const newPrice = oldPrice + INGREDIENT_PRICES[type];
    this.setState({totalPrice: newPrice, ingredients: updateIngredients})
  };

  removeIngredientHandelr = (type) => {
    const oldCount = this.state.ingredients[type];
    if(oldCount <= 0){
      return;
    }
    const updateCount = oldCount - 1 ; 
    const updateIngredients = {
      ...this.state.ingredients
    }
    updateIngredients[type] = updateCount;

    const oldPrice = this.state.totalPrice;
    const newPrice = oldPrice - INGREDIENT_PRICES[type];
    this.setState({totalPrice: newPrice, ingredients: updateIngredients})
  };

  render() {
    const disabledInfo = {
      ...this.state.ingredients
    };
    for (let key in disabledInfo) {
      disabledInfo[key] = disabledInfo[key] <= 0
    }
    return (
      <Aux>
        <Burger ingredients = {this.state.ingredients} />
        <BuildControls 
        Addition = {this.addIngredientHandelr}
        Decrease = {this.removeIngredientHandelr}
        Disabled = {disabledInfo}
        price = {this.state.totalPrice}/>
      </Aux>
    );
  }
}

export default BurgerBulider;