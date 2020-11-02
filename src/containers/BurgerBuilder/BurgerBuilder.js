import React, { Component } from 'react';

import Aux from '../../hoc/Auxiliary';
import Burger from '../../components/Burger/Burger';
import BuildControls from '../../components/Burger/BuildControls/BuildControls';

const INGREDIENTS_PRICE = {
    salad: 0.5,
    cheese: 0.4,
    meat: 1.3,
    bacon: 0.7,
}

class BurgerBuilder extends Component {

    state = {
        ingredients : {
            salad: 0,
            bacon: 0,
            cheese: 0,
            meat: 0,
        },
        totalPrice: 4,
    }

    addIngredientHandler = (type) => {
        let ingredients = {...this.state.ingredients};
        ingredients[type] = this.state.ingredients[type] + 1;
        let newPrice = this.state.totalPrice + INGREDIENTS_PRICE[type];
        this.setState({ingredients: ingredients, totalPrice: newPrice});
    }

    removeIngredientHandler = (type) => {
        if(this.state.totalPrice === 4) return;

        let ingredients = {...this.state.ingredients};
        ingredients[type] = this.state.ingredients[type] - 1;
        let newPrice = this.state.totalPrice - INGREDIENTS_PRICE[type];
        this.setState({ingredients: ingredients, totalPrice: newPrice});
    }

    render() {

        let disabledInfo = {...this.state.ingredients};

        for (let i in disabledInfo) {
            disabledInfo[i] = disabledInfo[i] <= 0;
        }

        return(
            <Aux>
                <div>
                    <Burger ingredients = {this.state.ingredients}/>
                </div>
                <div>
                    <BuildControls 
                        addIngredient={this.addIngredientHandler} 
                        removeIngredient={this.removeIngredientHandler}
                        price={this.state.totalPrice}
                        disabled={disabledInfo}
                    />
                </div>
            </Aux>
        );

    }
}

export default BurgerBuilder;