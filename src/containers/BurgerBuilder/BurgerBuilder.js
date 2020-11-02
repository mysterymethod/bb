import React, { Component } from 'react';

import Aux from '../../hoc/Auxiliary';
import Burger from '../../components/Burger/Burger';

class BurgerBuilder extends Component {

    state = {
        ingredients : {
            salad: 1,
            bacon: 1,
            cheese:2,
            meat: 1,
        }
    }

    render() {
        return(
            <Aux>
                <div>
                    <Burger ingredients = {this.state.ingredients}/>
                </div>
                <div>
                    Burger Controls!
                </div>
            </Aux>
        );

    }
}

export default BurgerBuilder;