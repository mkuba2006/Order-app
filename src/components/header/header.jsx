import React, { useState } from "react";
import classes from './style.module.css';


function Header() {

    return(
        <div className={classes['main-header']}>
            <h1>OrderMeals</h1>
        </div>
    )
}


export default Header;