import React, { Component } from 'react';

import classes from './ContactData.module.css';
import Button from '../../../components/UI/Button/Button';
import axios from '../../../axios.orders';
import Spinner from '../../../components/UI/Spinner/Spinner';

class ContactData extends Component {

    state = {
        name: null,
        email: null,
        address: {
            city: null,
            code: null,
        },
        loading: false,
    }

    orderhandler = (event) => {
        event.preventDefault();

        this.setState({loading: true});

        const data = {
            ingredients: this.props.ingredients,
            price: this.props.price,
            customer: {
                name: 'raftaar',
                city: 'london',
            },
            deliveryMethod: 'fastest',
        }

        axios.post('/orders.json', data)
            .then(res => {
                this.setState({loading: false});
                alert('Order Placed Successfully');
                this.props.history.push('/');
            })
            .catch(err => {
                this.setState({loading: false});
            })
    }




    render () {

        let form = (
            <form>
                <input className={classes.Input} type='text' name='name' placeholder='Your Name' />
                <input className={classes.Input} type='email' name='email' placeholder='Your Email' />
                <input className={classes.Input} type='text' name='city' placeholder='Your City' />
                <input className={classes.Input} type='text' name='code' placeholder='Your PinCode' />
                <Button btnType={'Success'} clicked={this.orderhandler} >ORDER</Button>
            </form>
        );

        if (this.props.loading) {
            form = <Spinner />
        }

        return (
            <div className={classes.ContactData}>
                <h4>Enter your Details.</h4>
                {form}
            </div>
        );
    }
}

export default ContactData;