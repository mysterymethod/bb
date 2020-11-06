import React from 'react';

import classes from './Order.module.css';

const order = (props) => {

    let arr = [];

    for (let i in props.ingredients) {
        arr.push({
            name: i,
            amount: props.ingredients[i],
        });
    }

    const ingredients = arr.map(i => {
        return <span 
            key={i.name} 
            style={{
                textTransform: 'capitalize', 
                display: 'inline-block',
                margin: '0 8px',
                border: '1px solid #ccc',
                padding: '5px',
        }}>{i.name}({i.amount}) </span>;
    })

    return (
        <div className={classes.Order}>
            <p>Ingredients: {ingredients}</p>
            <p>Price: <strong>$ {props.price}</strong></p>
        </div>
    );
}

export default order;