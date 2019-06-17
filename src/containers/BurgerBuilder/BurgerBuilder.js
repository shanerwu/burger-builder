import React, { Component } from 'react';

import Aux from '../../hoc/Auxiliary';
import Burger from '../../components/Burger/Buger';

class BurgerBuilder extends Component {

    state = {
        ingredient: {
            salad: 1,
            bacon: 1,
            cheese: 2,
            meat: 2
        }
    };

    render() {
        return (
            <Aux>
                <Burger ingredient={this.state.ingredient} />
                <div>Builder Contorls</div>
            </Aux>
        );
    }
}

export default BurgerBuilder;