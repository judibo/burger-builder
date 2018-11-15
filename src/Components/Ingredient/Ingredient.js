import React from 'react';

var Ingredient = function(props) {
  return (
    <div className="component IngredientList" style={{backgroundColor: props.ingredient.color}}>
      <h3>{props.ingredient.name} <button onClick={props.handleAddIngredient}>+</button></h3> 
    </div>
  )
}

export default Ingredient;