import Header from "./components/header/header";
import Mealss from './components/items/last'
import CartProvider from "./store/CartProvider";
import Cart from "./components/cart/cart";
import { useState } from "react";


function App() {

  const [Show, IsShow] = useState(false);

  const show = () => {
    IsShow(true);
  };

  const hide = () => {
    IsShow(false);
  };


  return (
    <CartProvider>
      {Show && <Cart onClose={hide} />}
      <Header onShowCart={show} />
      <Mealss />
    </CartProvider>
  );
}

export default App;
