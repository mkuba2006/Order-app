import { useContext } from 'react';
import classes from './style.module.css';
import CartContext from '../../store/meal_context';
import CartItem from './cartItem'

const Cart = (props) => {
  const cartCtx = useContext(CartContext);
  const hasItems = cartCtx.items.length > 0;
  
  const Remove = (id) => {
    cartCtx.removeItem(id);
  };
    
  const Add = (item) => {
    cartCtx.addItem({ ...item, amount: 1 });
  };

  return (
    <div>
      <ul className={classes['cart-items']}>
        {cartCtx.items.map((item) => (
          <CartItem
            key={item.id}
            name={item.name}
            amount={item.amount}
            price={item.price}
            onAdd={Add.bind(null, item)}
            onRemove={Remove.bind(null, item.id)}//////////////////tylko id dostepne
          />
        ))}
      </ul>
      <div className={classes.total}>
        <span>Total Amount</span>
        <span>${cartCtx.totalAmount.toFixed(2)}</span>
       </div>
       <div className={classes.actions}>
        <button onClick={props.onClose}>
          Close
        </button>
        {hasItems && <button>Order</button>}
      </div>
    </div>
  );
}

export default Cart;