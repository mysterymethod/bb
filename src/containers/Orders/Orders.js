import React, { Component } from 'react';

import Order from '../../components/Order/Order';
import axios from '../../axios.orders';

class Orders extends Component {

    state = {
        orders: [],
        loading: true,
    }

    componentDidMount () {

        axios.get('/orders.json')
            .then(res => {
                let arr = [];
                for (let i in res.data) {
                    arr.push({
                        ...res.data[i],
                        id: i,
                    });
                }

                this.setState({orders: arr});
            })
            .catch(err => {
                console.log(err);
            })
    }


    render () {
        return (
            <div>
                {this.state.orders.map((i) => {
                    return (
                        <Order 
                            key={i.key}
                            price={i.price}
                            ingredients={i.ingredients}
                        />
                    )
                })}
                
            </div>
            
        );
    }
}

export default Orders;