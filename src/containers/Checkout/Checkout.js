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

    render () {
        return (
            <CheckoutSummary ingredients={this.state.ingredients} />
        );
    }
}

export default Checkout;