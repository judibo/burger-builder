import React, { Component } from 'react';
import BurgerStack from '../BurgerStack/BurgerStack';
import ClearBurger from '../ClearBurger/ClearBurger';


class BurgerPane extends Component {
  render() {
    var mappedStack = this.props.stack.map( stack => <BurgerStack stack={stack} />)
    return (
        <div className="component">
            <h1>BurgerPane!</h1>
            {mappedStack}
            <ClearBurger onClearArray={this.props.onClearArray}/>
        </div>
    )
  }
}
export default BurgerPane;