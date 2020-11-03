import React, { Component } from 'react';

import Aux from '../../hoc/Auxiliary';
import Toolbar from '../Navigation/Toolbar/Toolbar';
import classes from './Layout.module.css';
import SideDrawer from '../Navigation/SideDrawer/SideDrawer';


class Layout extends Component {

    state = {
        showSideDrawer: true,
    }

    SideDrawerCloseHandler = () => {
        this.setState({showSideDrawer: false});
    }


    render () {
        return (
            <Aux>
                <div>
                    <Toolbar />
                    <SideDrawer 
                        show={this.state.showSideDrawer} 
                        click={this.SideDrawerCloseHandler}  
                    />
                </div>
                <main className={classes.Content}>
                    {this.props.children}
                </main>
            </Aux> 
        );
    }
}


export default Layout;