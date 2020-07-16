import React, { Component } from 'react';

import Aux from '../../hoc/Auxiliary/Auxiliary';
import Burger from '../../components/Burger/Burger';
import BuildControls from '../../components/Burger/BuildControls/BuildControls';
import Modal from '../../components/UI/Modal/Modal';
import OrderSummary from '../../components/Burger/OrderSummary/OrderSummary';
import axios from '../../axios-orders';
import Spinner from '../../components/UI/Spinner/Spinner';

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
    purchasing: false,
    lodding: false
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

  addIngredientHandler = (type) => {
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

  removeIngredientHandler = (type) => {
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

  purchasHandler = () => {
    this.setState({purchasing: true})
  };
  
  purchasCloseHandler = () => {
    this.setState({purchasing: false})
  };
  purchasCountinueHandler = () => {
    this.setState({lodding: true})
    // alert('You will Countinue checkout')
    const order = {
      Ingredients: this.state.ingredients,
      Price: this.state.totalPrice,
      Customer: {
        Name: 'Ghadeer Jarullah',
        Address: {
          Street: 'TestStreet',
          ZipCode: '12345',
          Country: 'Netherlands'
        },
        Email: 'test@test.com'
      },
      Shipping: 'fastest'
    };
    axios.post('/orders.json', order)
        .then(response => {
          this.setState({lodding: false, purchasing: false})
        })
        .catch(error => {
          this.setState({lodding: false, purchasing: false})
        });
  };

  render() {
    const disabledInfo = {
      ...this.state.ingredients
    };
    for (let key in disabledInfo) {
      disabledInfo[key] = disabledInfo[key] <= 0
    }

    let orderSummary = <OrderSummary ingredients={this.state.ingredients} 
                        totalPrice = {this.state.totalPrice}
                        close = {this.purchasCloseHandler}
                        countinue = {this.purchasCountinueHandler}/>
        if(this.state.lodding){
          orderSummary = <Spinner />
        };               

    return (
      <Aux>
        <Burger ingredients = {this.state.ingredients} />
        <Modal show = {this.state.purchasing} close = {this.purchasCloseHandler}>
            {orderSummary}
        </Modal>
        <BuildControls 
        Addition = {this.addIngredientHandler}
        Decrease = {this.removeIngredientHandler}
        Disabled = {disabledInfo}
        price = {this.state.totalPrice}
        purchasable = {this.state.purchasable}
        ordered = {this.purchasHandler}
        />
      </Aux>
    );
  }
}

export default burgerBulider;