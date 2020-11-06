import React, { Component } from 'react';

import classes from './ContactData.module.css';
import Button from '../../../components/UI/Button/Button';
import axios from '../../../axios.orders';
import Spinner from '../../../components/UI/Spinner/Spinner';
import Input from '../../../components/UI/Input/Input';

class ContactData extends Component {

    state = {
        orderForm: {
            name: {
                elementType: 'input',
                elementConfig: {
                    type: 'text',
                    placeholder: 'Your Name'
                },
                value: '',
            },
            email: {
                elementType: 'input',
                elementConfig: {
                    type: 'email',
                    placeholder: 'Your Email'
                },
                value: '',
            },
            city: {
                elementType: 'input',
                elementConfig: {
                    type: 'text',
                    placeholder: 'Your City'
                },
                value: '',
            },
            pinCode: {
                elementType: 'input',
                elementConfig: {
                    type: 'text',
                    placeholder: 'Your PinCode'
                },
                value: '',
            },
            deliveryMethod: {
                elementType: 'select',
                elementConfig: {
                    options: [
                        {value: 'fastest', displayValue: 'Fastest'},
                        {value: 'cheapest', displayValue: 'Cheapest'},
                    ]
                },
                value: '',
            }
        }
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
                <Input inputtype='input' type='text' name='name' placeholder='Your Name' />
                <Input inputtype='input' type='email' name='email' placeholder='Your Email' />
                <Input inputtype='input' type='text' name='city' placeholder='Your City' />
                <Input inputtype='input' type='text' name='code' placeholder='Your PinCode' />
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