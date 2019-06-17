import React, { Component } from 'react';

import Aux from '../../hoc/Auxiliary';
import Burger from '../../components/Burger/Buger';
import BuildControls from '../../components/Burger/BuildControls/BuildControls';

const INGREDIENT_PRICES = {
    salad: 0.5,
    bacon: 0.4,
    cheese: 1.3,
    meat: 0.6
};

class BurgerBuilder extends Component {

    state = {
        ingredients: {
            salad: 0,
            bacon: 0,
            cheese: 0,
            meat: 0
        },
        totalPrice: 0
    };

    addIngredientHandler = (type) => {
        const oldCount = this.state.ingredients[type];
        const updateCount = oldCount + 1;
        const updateIngredients = {
            ...this.state.ingredients
        };
        updateIngredients[type] = updateCount;
        const priceAddition = INGREDIENT_PRICES[type];
        const oldPrice = this.state.newPrice;
        const newPrice = oldPrice + priceAddition;

        this.setState({
            ingredients: updateIngredients,
            totalPrice: newPrice
        });
    }

    removeIngredientHandler = () => {

    }

    render() {
        return (
            <Aux>
                <Burger ingredient={this.state.ingredients} />
                <BuildControls ingredientAdder={this.addIngredientHandler} />
            </Aux>
        );
    }
}

export default BurgerBuilder;