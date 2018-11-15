import React, { Component } from 'react';


class ClearBurger extends Component {
  render() {
    return (
        <div>
            <button onClick={this.props.onClearArray}>Clear</button>
        </div>
    )
  }
}


export default ClearBurger;