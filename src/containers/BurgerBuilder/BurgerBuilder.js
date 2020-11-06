import React, { Component } from 'react';

import Aux from '../../hoc/Auxiliary';
import Burger from '../../components/Burger/Burger';
import BuildControls from '../../components/Burger/BuildControls/BuildControls';
import Modal from '../../components/UI/Modal/Modal';
import OrderSummary from '../../components/Burger/OrderSummary/OrderSummary';
import axios from '../../axios.orders';
import Spinner from '../../components/UI/Spinner/Spinner';
import withErrorHandler from '../../hoc/withErrorHandler/withErrorHandler';

const INGREDIENTS_PRICE = {
    salad: 0.5,
    cheese: 0.4,
    meat: 1.3,
    bacon: 0.7,
}

class BurgerBuilder extends Component {

    state = {
        ingredients : null,
        totalPrice: 4,
        purchasable: false,
        purchasing: false,
        loading: false,
    }

    componentDidMount() {
        
        axios.get('/ingredients.json')
            .then(res => {
                this.setState({ingredients: res.data});
                
            })
            .catch(err => console.log(err));
    }

    updatePurchasable (price) {
        this.setState({purchasable: price > 4});
    }

    purchasingHandler = () => {
        this.setState({purchasing: true});
    }

    purchasingCancelHandler = () => {
        this.setState({purchasing: false});
    }

    purchasingContinueHandler = () => {
    
        // this.setState({loading: true});

        // const data = {
        //     ingredients: this.state.ingredients,
        //     price: this.state.price,
        //     customer: {
        //         name: 'raftaar',
        //         city: 'london',
        //     },
        //     deliveryMethod: 'fastest',
        // }

        // axios.post('/orders.json', data)
        //     .then(res => {
        //         this.setState({loading: false, purchasing: false});
        //     })
        //     .catch(err => {
        //         this.setState({loading: false, purchasing: false});
        //     })

        let arr = [];

        for (let i in this.state.ingredients) {
            arr.push(encodeURIComponent(i) + '=' + encodeURIComponent(this.state.ingredients[i]));
        }

        const arrString = arr.join('&');

        this.props.history.push({
            pathname: '/checkout',
            search: '?' + arrString
        });
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

        let orderSummary = null;

        if (this.state.loading) {
            orderSummary = <Spinner />
        }

        let burger = <Spinner />

        if (this.state.ingredients) {
            burger=(
                <Aux> 
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
            )
            orderSummary = (
                <OrderSummary 
                    ingredients={this.state.ingredients}
                    cancleBtn={this.purchasingCancelHandler}
                    continueBtn={this.purchasingContinueHandler}
                    price={this.state.totalPrice}
                />
            )
             
        }

        return(
            <Aux>
                <Modal show={this.state.purchasing} modalClose={this.purchasingCancelHandler}>
                    {orderSummary}
                </Modal>
                {burger}
            </Aux>
        );

    }
}

export default withErrorHandler(BurgerBuilder, axios);