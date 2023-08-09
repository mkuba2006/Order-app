import React from "react";
import Form from "./meal-form";
function Meal(props) {




    return (
      <li className={classes.item}>
        <div>
            <p className={classes.name}>{props.name}</p>
            <p className={classes.description}>{props.description}</p>
            <p className={classes.price}>${props.price}</p>
        </div>
        <div>
            <Form/>
        </div>
      </li>
    );
}
export default Meal;