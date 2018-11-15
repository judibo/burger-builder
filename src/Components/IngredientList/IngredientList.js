import React, {Component} from 'react';
import Ingredient from '../Ingredient/Ingredient';
import IngredientForm from '../Ingredient/IngredientForm';


class IngredientList extends Component {

    render() {
        var mappedIngredient = this.props.ingredients.map( ingredient => <Ingredient ingredient={ingredient} handleAddIngredient={() => this.props.handleAddIngredient(ingredient)}/>)
        return (
            <div className="component">
            <h3>Ingredient List</h3>
            <div>
            { mappedIngredient }
            </div>
        </div>
        );
      }
}

export default IngredientList;