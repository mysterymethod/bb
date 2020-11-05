import React, { Component } from 'react';

import CheckoutSummary from '../../components/Order/CheckoutSummary/CheckoutSummary';

class Checkout extends Component {

    state = {
        ingredients: {
            salad: 0,
            bacon: 5,
            cheese: 0,
            meat: 0,
        }
    }

    cancelBtnHandler = () => {
        this.props.history.goBack();
    }

    continueBtnHandler = () => {
        this.props.history.replace('/checkout/contact-data');
    }


    render () {
        return (
            <CheckoutSummary 
                ingredients={this.state.ingredients} 
                cancelBtn={this.cancelBtnHandler}
                continueBtn={this.continueBtnHandler}
            />
        );
    }
}

export default Checkout;