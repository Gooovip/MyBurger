import React from 'react';
import Aux from '../../../hoc/Auxiliary/Auxiliary';
import Button from '../../UI/Button/Button';

const orderSummary = (props) => {
  const ingredientSummary = Object.keys(props.ingredients)
    .map(igkey => {
        return <li key = {igkey}><span style={{textTransform: 'capitalize'}}>{igkey}</span>: {props.ingredients[igkey]}</li>
    });
  

  return (
      <Aux>
        <Button btnType="DangerClose"
        clicked={props.close}>X</Button>
        <h3>Your Order</h3>
        <p>A delicious burger with the folowing ingredients:</p>
        <ul>
          {ingredientSummary}
        </ul>
        <p>Current price: <strong>{props.totalPrice.toFixed(2)} €</strong></p>
        <p>Countinue to Checkout:</p>
        <Button btnType="SuccessCountinue"
        clicked={props.countinue}>Countinue</Button>
      </Aux>
  );
}

export default orderSummary;