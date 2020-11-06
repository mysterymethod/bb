import React from 'react';
import { Switch } from 'react-router-dom';

import classes from './Input.module.css';

const input = (props) => {


    let inputElement = null;

    switch (props.elementType) {
        case 'input':
            inputElement = <input 
                className={classes.InputElement} 
                {...props.elementConfig} 
                value={props.value}
            />
            break;
    
        default:
            break;
    }

    return (
        <div>
            <label className={classes.Label} >{props.label}</label>
            {inputElement}
        </div>
        
    );
}

export default input;