import React from 'react';

import classes from './BuildControls.module.css';
import BuildControl from './BuildControl/BuildControl';

const buildControls = (props) => {

    const controls = [
        {label: 'Salad', type: 'salad'},
        {label: 'Cheese', type: 'cheese'},
        {label: 'Meat', type: 'meat'},
        {label: 'Bacon', type: 'bacon'},
    ]

    return (
        <div className={classes.BuildControls}>
            <p>Total Price: <strong>$ {props.price.toFixed(2)}</strong></p>
            {controls.map((item)=> {
                return (
                    <BuildControl 
                        key={item.label} 
                        label={item.label} 
                        add={() => props.addIngredient(item.type)}
                        remove={() => props.removeIngredient(item.type)}
                        disabled={props.disabled[item.type]}
                    />
                )
            })}
            <button 
                className={classes.OrderButton}
                disabled={!props.purchasable}
                onClick={props.showModal}
            >ORDER NOW</button>
        </div>
    );
}

export default buildControls;