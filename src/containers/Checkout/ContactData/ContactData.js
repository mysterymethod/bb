import React, { Component } from 'react';

import classes from './ContactData.module.css';
import Button from '../../../components/UI/Button/Button';

class ContactData extends Component {

    state = {
        name: null,
        email: null,
        address: {
            city: null,
            code: null,
        },
    }

    render () {
        return (
            <div className>
                <h4>Enter your Details.</h4>
                <form>
                    <input className="Input" type='text' name='name' placeholder='Your Name' />
                    <input className="Input" type='email' name='email' placeholder='Your Email' />
                    <input className="Input" type='text' name='city' placeholder='Your City' />
                    <input className="Input" type='text' name='code' placeholder='Your PinCode' />
                    <Button btnType={'Success'}>ORDER</Button>
                </form>
            </div>
        );
    }
}

export default ContactData;