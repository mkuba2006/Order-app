import React, { useState } from "react";
import classes from './style.module.css';
import Cart from './cartCount'

function Header(props) {

    return(
        <div className={classes['main-header']}>
            <h1>OrderMeals</h1>
            <Cart onClick={props.onShowCart} />
        </div>
    )
}


export default Header;