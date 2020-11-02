import React from 'react';

import Aux from '../../../hoc/Auxiliary';

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
            <p>Continue to Checkout?</p>
        </Aux>
    );
}

export default orderSummary;