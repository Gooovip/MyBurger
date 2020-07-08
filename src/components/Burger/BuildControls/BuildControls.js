import React from 'react';
import classes from './BuildControls.module.css';
import BuildControl from './BuildControl/BuildControl';


const controls = [
  {lable: 'Meat', type: 'meat'},
  {lable: 'Cheese', type: 'cheese'},
  {lable: 'Salad', type: 'salad'},
  {lable: 'Bacon', type: 'bacon'}
];


const buildControls = (props) => (
  <div className={classes.BuildControls}>
    <p>current price: <strong>{props.price.toFixed(2)} ‎€</strong></p>
     {controls.map(ctrl => {
        return <BuildControl 
          key = {ctrl.lable}
          label = {ctrl.lable}
          added = {() => props.Addition(ctrl.type)}
          removed = {() => props.Decrease(ctrl.type)}
          disabled = {props.Disabled[ctrl.type]}/>
      })}
      <button className={classes.OrderButton}
       disabled = {!props.purchasable}>ORDER NOW</button>
  </div>
)

export default buildControls;