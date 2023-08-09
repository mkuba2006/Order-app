import React from "react";

function Form(props) {
    return (
      <form>
        <input ref={amountInputRef} label='Amount' input={{ id: 'amount_' + props.id, type: 'number',min: '1',max: '5',step: '1', defaultValue: '1',}}/>
        <button>+ Add</button>
      </form>
    );
}
export default Form;