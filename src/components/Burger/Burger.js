import React from 'react';

import BurgerIngredients from './BurgerIngredients/BurgerIngredients';
import classes from './burger.module.css';
import burgerIngredients from './BurgerIngredients/BurgerIngredients';

const burger = (props) => {

    const ingredients = Object.keys(props.ingredients)
        .map(item => {
            return [...Array(props.ingredients[item])]
                .map((_,index) => {
                    return <BurgerIngredients key={item+index} type={item} />
                });
        });


    return (
        <div className={classes.Burger}>
            <BurgerIngredients type='bread-top' />
            {ingredients}
            <BurgerIngredients type='bread-bottom'/>
        </div>
        
    );
}

export default burger;