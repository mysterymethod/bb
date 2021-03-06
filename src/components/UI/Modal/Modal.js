import React from 'react';

import classes from './Modal.module.css';
import Backdrop from '../Backdrop/Backdrop';
import Aux from '../../../hoc/Auxiliary';

const modal = (props) => {
    return (
        <Aux>
            <Backdrop show={props.show} clicked={props.modalClose} />
            <div className={classes.Modal}
                style = {{transform: props.show ? 'translate(0)' : 'translate(-100vh)',
                        opacity: props.show ? '1' : '0'}}  
            >
                {props.children}
            </div>
        </Aux>
    );
}

export default modal;