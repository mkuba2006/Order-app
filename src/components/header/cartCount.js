import { useContext, useEffect, useState } from 'react';
import CartContext from '../../store/meal_context';
import Icon from './CartIcon'
import classes from './style.module.css';
function Cart(props) {
    const cartCtx = useContext(CartContext)
    const {items} = cartCtx;
    const [clicked, setClicked]= useState(false)

    const btnClasses = `${classes.button} ${clicked ? classes.bump : ''}`;
    useEffect(()=>{
        if (items.length === 0) {
            return;
        }
        setClicked(true);
      
        const timer = setTimeout(() => {
            setClicked(false);
        }, 300);

        return () => {
            clearTimeout(timer);
        };
    },[items])


    const length = items.reduce((currentNum, item)=>{
        return currentNum + Number(item.amount);
    },0)


    return(
        <button className={btnClasses} onClick={props.onClick}>
            <span><Icon /></span>
            <span>Your Cart</span>
            <span> {length}</span>
        </button>
    )
}


export default Cart;