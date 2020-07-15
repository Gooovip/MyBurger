import React, { Component } from 'react';
import Aux from '../../hoc/Auxiliary/Auxiliary';
import Burger from '../../components/Burger/Burger';
import BuildControls from '../../components/Burger/BuildControls/BuildControls';
import Modal from '../../components/UI/Modal/Modal';
import OrderSummary from '../../components/Burger/OrderSummary/OrderSummary';


const INGREDIENT_PRICES = {
  meat: 1.5,
  salad: 0.5,
  bacon: 0.5,
  cheese: 0.5
};

class burgerBulider extends Component {
  state = {
    ingredients: {
      bacon: 0,
      cheese: 0,
      meat: 0,
      salad: 0
    },
    totalPrice: 3,
    purchasable: false,
    purchasing: false
  };
  
  // Other way ///
  // updatePurchasableState = (ingredients) => {
  //     const sum = Object.keys(ingredients)
  //     .map(igKey => {
  //       return ingredients[igKey]
  //     }).reduce((sum, el) => {
  //         return sum + el ;
  //     },0)  
  //     this.setState({purchasable: sum > 0})
  // };

  updatePurchasableState = (totalPrice) => {
    const sum = totalPrice;
    this.setState({purchasable: sum > 3})
  }

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
    // this.updatePurchasableState(updateIngredients)
    this.updatePurchasableState(newPrice)
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
    // this.updatePurchasableState(updateIngredients)
    this.updatePurchasableState(newPrice)
  };

  purchasHandelr = () => {
    this.setState({purchasing: true})
  };
  
  purchasCloseHandelr = () => {
    this.setState({purchasing: false})
  };
  purchasCountinueHandelr = () => {
    alert('You will Countinue checkout')
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
        <Modal show = {this.state.purchasing} close = {this.purchasCloseHandelr}>
          <OrderSummary ingredients={this.state.ingredients} 
          totalPrice = {this.state.totalPrice}
          close = {this.purchasCloseHandelr}
          countinue = {this.purchasCountinueHandelr}/>
        </Modal>
        <BuildControls 
        Addition = {this.addIngredientHandelr}
        Decrease = {this.removeIngredientHandelr}
        Disabled = {disabledInfo}
        price = {this.state.totalPrice}
        purchasable = {this.state.purchasable}
        ordered = {this.purchasHandelr}
        />
      </Aux>
    );
  }
}

export default burgerBulider;