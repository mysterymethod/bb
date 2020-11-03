import React from 'react';

import Aux from '../../../hoc/Auxiliary';
import Button from '../../UI/Button/Button';
const orderSummary = (props) => {

    const ingredientsSummary = Object.keys(props.ingredients)
        .map((item) => {
            return (
                <li>
                    <span style={{textTransform: 'capitalize'}}>{item}: {props.ingredients[item]} </span>
                </li>
            );
        })


    return (
        <Aux>
            <h3>Your Order</h3>
            <p>A delicious burger with the following ingredients:</p>
            <ul>
                {ingredientsSummary}
            </ul>
            <p><strong>Total Price: $ {props.price.toFixed(2)}</strong></p>
            <p>Continue to Checkout?</p>
            <Button btnType='Danger' clicked={props.cancleBtn}>CANCEL</Button>
            <Button btnType='Success' clicked={props.continueBtn}>CONTINUE</Button>
        </Aux>
    );
}

export default orderSummary;