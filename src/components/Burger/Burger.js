import React from 'react';

import BurgerIngredients from './BurgerIngredients/BurgerIngredients';
import classes from './burger.module.css';
import burgerIngredients from './BurgerIngredients/BurgerIngredients';

const burger = (props) => {

    let ingredients = Object.keys(props.ingredients)
        .map(item => {
            return [...Array(props.ingredients[item])]
                .map((_,index) => {
                    return <BurgerIngredients key={item+index} type={item} />
                });
        })
        .reduce((arr,el) => {
            return arr.concat(el);
        }, []);

    if (ingredients.length === 0) {
        ingredients = <p>Please, start adding ingredients.</p>
    }


    return (
        <div className={classes.Burger}>
            <BurgerIngredients type='bread-top' />
            {ingredients}
            <BurgerIngredients type='bread-bottom'/>
        </div>
        
    );
}

export default burger;