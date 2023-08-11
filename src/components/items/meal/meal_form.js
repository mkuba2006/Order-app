import React from "react";
import { useRef } from 'react';

function Form(props) {

  const amountInputRef = useRef();

  const submit= (e)=>{
    e.preventDefault();
    
    const Enteredamount = amountInputRef.current.value;
    const number = Enteredamount;

    if ( Enteredamount.trim().length === 0 || number < 1 || number > 5) {
      return;
    }
    props.onAddToCart(number);
  }

  
  return (
    <form onSubmit={submit}>
    <div>
      <label htmlFor={'amount_' + props.id}>Amount</label>
      <input
        ref={amountInputRef}
        id={'amount_' + props.id}
        type="number"
        min="1"
        max="5"
        step="1"
        defaultValue="1"
      />
    </div>
      <button>+ Add</button>
    </form>
  );
}

export default Form;