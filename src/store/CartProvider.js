import { useReducer } from 'react';
import CartContext from './meal_context';

const defaultCartState = { items: [], totalAmount: 0 };

const cartReducer = (state, action) => {
  let NewItems = [...state.items];
  
  if (action.type === 'ADD') {
    console.log(action);
    const Index = state.items.findIndex((item) => item.id === action.item.id);
    const NewAmount = state.totalAmount + action.item.price * action.item.amount;
    const CartItem = state.items[Index];

    if (CartItem) {
      let am = CartItem.amount + action.item.amount;
      const updatedItem = {...CartItem,amount: am,};
      NewItems[Index] = updatedItem;
    } else {
      NewItems = state.items.concat(action.item);
    }

    return {
      items: NewItems,
      totalAmount: NewAmount,
    };
  }




  if (action.type === 'REMOVE') {
    console.log('removed');
    const Index = state.items.findIndex((item) => item.id === action.id);
    const CartItem = state.items[Index];
    const NewAmount = state.totalAmount - CartItem.price;

    if (CartItem.amount === 1) {
      NewItems = state.items.filter(item => item.id !== action.id);
    } else {
      const updatedItem = { ...CartItem, amount: CartItem.amount - 1 };
      NewItems[Index] = updatedItem;
    }

    return {
      items: NewItems,
      totalAmount: NewAmount
    };
  }
  return defaultCartState;
};



const CartProvider = (props) => {
  const [cartState, action] = useReducer(cartReducer,defaultCartState);

  const add = (item) => {action({ type: 'ADD', item: item })};
  const remove = (id) => {action({ type: 'REMOVE', id: id })};

  const cartContext = {
    items: cartState.items,
    totalAmount: cartState.totalAmount, 
    addItem: add,
    removeItem: remove,
  };

  return (
    <CartContext.Provider value={cartContext}>
      {props.children}
    </CartContext.Provider>
  );
};

export default CartProvider;