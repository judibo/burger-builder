import React, { Component } from 'react';
import './App.css';
import BurgerPane from './Components/BurgerPane/BurgerPane';
import IngredientList from './Components/IngredientList/IngredientList';
import IngredientForm from './Components/Ingredient/IngredientForm';

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      ingredients: [
        {name: 'Kaiser Bun', color: 'saddlebrown'},
        {name: 'Sesame Bun', color: 'sandybrown'},
        {name: 'Gluten Free Bun', color: 'peru'},
        {name: 'Beef Patty', color: '#3F250B'},
        {name: 'Soy Patty', color: '#3F250B'},
        {name: 'Black Bean Patty', color: '#3F250B'},
        {name: 'Chicken Patty', color: 'burlywood'},
        {name: 'Lettuce', color: 'lawngreen'},
        {name: 'Tomato', color: 'tomato'},
        {name: 'Bacon', color: 'maroon'},
        {name: 'Onion', color: 'lightyellow'}
      ],
      stack: []
    }
    this.handleAddIngredient = this.handleAddIngredient.bind(this)
    this.handleNewIngredient = this.handleNewIngredient.bind(this)
    this.onClearArray = this.onClearArray.bind(this)
  }
 
  handleAddIngredient(ingredient) {
    var stack = this.state.stack.slice();
    stack.unshift(ingredient)
    this.setState({ stack: stack })
  }

  handleNewIngredient(newIngredient) {
		var ingredients = this.state.ingredients.slice();
		ingredients.push(newIngredient);
		this.setState({ingredients: ingredients})
	}
  
  onClearArray = () => {
    this.setState({ stack: [] })
  }
  
  render() {
    return (
      <div className="App">
          <div>
            <IngredientList
              ingredients={this.state.ingredients} 
              handleAddIngredient={this.handleAddIngredient} />
            <IngredientForm handleSubmit={this.handleNewIngredient}/>

          </div>
          <div className="Burger">
            <BurgerPane
              stack={this.state.stack}
              onClearArray={this.onClearArray}/>
          </div>
      </div>
    );
  }
}

export default App;
