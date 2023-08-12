import React from "react";
import Meal from "./mealItem";
import classes from './style.module.css';

const meals = [
  {
    id: 'm1',
    name: 'Sushi',
    description: 'Finest fish and veggies',
    price: 22.99,
  },
  {
    id: 'm2',
    name: 'Schnitzel',
    description: 'A german specialty!',
    price: 16.5,
  },
  {
    id: 'm3',
    name: 'Barbecue Burger',
    description: 'American, raw, meaty',
    price: 12.99,
  },
  {
    id: 'm4',
    name: 'Green Bowl',
    description: 'Healthy...and green...',
    price: 18.99,
  },
  {
    id: 'm5',
    name: 'Pierogi',
    description: 'Healthy...and yummy...',
    price: 12.99,
  },
];

function Meals() {
  const rend = meals.map((meal) => (
    <Meal
      key={meal.id}
      id={meal.id}
      name={meal.name}
      description={meal.description}
      price={meal.price}
    />
  ));

  return (
    <div>
      <ul className={classes.ul}>{rend}</ul>
    </div>
  );
}

export default Meals;
