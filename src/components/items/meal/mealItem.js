import { useContext } from 'react';
import CartContext from '../../../store/meal_context';
import React from "react";
import Form from "./meal_form";
import classes from './style.module.css';


function Meal(props) {
  const price = `${props.price.toFixed(2)}`;

  const ctx = useContext(CartContext);
  const AddToCartHandl = ilosc =>{
    ctx.addItem({
      id: props.id,
      name: props.name,
      amount: Number(ilosc),
      price: props.price
    });
  };

  return (
    <li className={classes.item} id={props.id}>
      <div>
          <p className={classes.name}>{props.name}</p>
          <p className={classes.description}>{props.description}</p>
          <p className={classes.price}>${price}</p>
      </div>
      <div className={classes.form}>
        <Form id={props.id} onAddToCart={AddToCartHandl}/>
      </div>
    </li>
  );
}
export default Meal;