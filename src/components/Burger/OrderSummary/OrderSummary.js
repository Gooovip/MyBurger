import React from 'react';
import Aux from '../../../hoc/Auxiliary';

const orderSummary = (props) => {
  const ingredientSummary = Object.keys(props.ingredients)
    .map(igkey => {
        return <li><span style={{textTransform: 'capitalize'}}>{igkey}</span>: {props.ingredients[igkey]}</li>
    });
  

  return (
      <Aux>
        <h3>Your Order</h3>
        <p>A delicious burger with the folowing ingredients:</p>
        <ul>
          {ingredientSummary}
        </ul>
        <p>Current price: <strong>{props.totalPrice.toFixed(2)} €</strong></p>
        <p>Countinue to Checkout</p>
      </Aux>
  );
}

export default orderSummary;