import React, { Component } from 'react';

import Aux from '../../hoc/Auxiliary';
import Toolbar from '../Navigation/Toolbar/Toolbar';
import classes from './Layout.module.css';
import SideDrawer from '../Navigation/SideDrawer/SideDrawer';


class Layout extends Component {

    state = {
        showSideDrawer: false,
    }

    SideDrawerCloseHandler = () => {
        this.setState({showSideDrawer: false});
    }

    SideDrawerOpenHandler = () => {
        this.setState({showSideDrawer: true});
    }


    render () {
        return (
            <Aux>
                <div>
                    <Toolbar click={this.SideDrawerOpenHandler}/>
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