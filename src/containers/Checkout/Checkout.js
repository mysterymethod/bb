import React, { Component } from 'react';
import { Route } from 'react-router-dom';

import CheckoutSummary from '../../components/Order/CheckoutSummary/CheckoutSummary';
import ContactData from '../Checkout/ContactData/ContactData';

class Checkout extends Component {

    state = {
        ingredients: {
            salad: 0,
            bacon: 0,
            cheese: 0,
            meat: 0,
        },
        price: 0,
    }
    componentDidMount () {
        let arr = new URLSearchParams(this.props.location.search);
        let ingredients = {};

        for (let i of arr.entries()) {
            //['salad','2']
            if (i[0] === 'price') {
                this.setState({price: i[1]});
            } else {
                ingredients[i[0]] = +i[1];
            }
            
        }

        this.setState({ingredients: ingredients});
    }

    cancelBtnHandler = () => {
        this.props.history.goBack();
    }

    continueBtnHandler = () => {
        this.props.history.replace('/checkout/contact-data');
    }


    render () {
        return (
            <div>
                <CheckoutSummary 
                    ingredients={this.state.ingredients} 
                    cancelBtn={this.cancelBtnHandler}
                    continueBtn={this.continueBtnHandler}
                />

                <Route 
                    path={this.props.match.path + '/contact-data'} 
                    render={(props) => <ContactData ingredients={this.state.ingredients} price={this.state.price} {...props} />} 
                />
            </div>
        );
    }
}

export default Checkout;