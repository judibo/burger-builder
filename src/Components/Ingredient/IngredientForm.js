import React, {Component} from 'react';

class IngredientForm extends Component {
    constructor(props) {
        super(props)
        this.handleSubmit = this.handleSubmit.bind(this)
    }
    handleSubmit(e) {
        e.preventDefault();
        this.props.handleSubmit( e.target.newIngredient.value )
        e.target.newIngredient.value = "";
    }
    render() {
        return (
            <div className="IngredientForm">
                <form onSubmit={this.handleSubmit}>
                    <input type="text" name="newIngredient" value={this.props.value} placeholder="Add ingredient"/>
                    <input type="submit" value="Add" />
                </form>
            </div>
        );
      }
}


export default IngredientForm;