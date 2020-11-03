import React, { Component } from 'react';

import Aux from '../../hoc/Auxiliary';
import Burger from '../../components/Burger/Burger';
import BuildControls from '../../components/Burger/BuildControls/BuildControls';
import Modal from '../../components/UI/Modal/Modal';
import OrderSummary from '../../components/Burger/OrderSummary/OrderSummary';

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
        purchasable: false,
        purchasing: false,
    }

    updatePurchasable (price) {
        this.setState({purchasable: price > 4});
    }

    purchasingHandler = () => {
        this.setState({purchasing: true});
    }

    addIngredientHandler = (type) => {
        let ingredients = {...this.state.ingredients};
        ingredients[type] = this.state.ingredients[type] + 1;
        let newPrice = this.state.totalPrice + INGREDIENTS_PRICE[type];
        this.setState({ingredients: ingredients, totalPrice: newPrice});
        this.updatePurchasable(newPrice);
    }

    removeIngredientHandler = (type) => {
        if(this.state.totalPrice === 4) return;

        let ingredients = {...this.state.ingredients};
        ingredients[type] = this.state.ingredients[type] - 1;
        let newPrice = this.state.totalPrice - INGREDIENTS_PRICE[type];
        this.setState({ingredients: ingredients, totalPrice: newPrice});
        this.updatePurchasable(newPrice);
    }

    render() {

        let disabledInfo = {...this.state.ingredients};

        for (let i in disabledInfo) {
            disabledInfo[i] = disabledInfo[i] <= 0;
        }

        return(
            <Aux>
                <Modal show={this.state.purchasing}>
                    <OrderSummary ingredients={this.state.ingredients}/>
                </Modal>
                <Burger ingredients = {this.state.ingredients}/>
                <BuildControls 
                    addIngredient={this.addIngredientHandler} 
                    removeIngredient={this.removeIngredientHandler}
                    price={this.state.totalPrice}
                    purchasable={this.state.purchasable}
                    showModal={this.purchasingHandler}
                    disabled={disabledInfo}
                />   
            </Aux>
        );

    }
}

export default BurgerBuilder;