import React from 'react';

var BurgerStack = function(props) {
  return (
    <div className="component Burger IngredientList" style={{backgroundColor: props.stack.color}}>
      <h3>{props.stack.name}</h3>
    </div>
  )
}

export default BurgerStack;