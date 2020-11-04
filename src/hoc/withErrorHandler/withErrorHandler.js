import React, { Component } from 'react';

import Aux from '../Auxiliary';
import Modal from '../../components/UI/Modal/Modal';

const withErrorHandler = (WrapperComponent, axios) => {
    return class extends Component {
        state = {
            error: null,
        }

        componentDidMount () {
            this.reqInterceptors = axios.interceptors.request.use(req => {
                this.setState({error: null});
                return req;
            }, err => {});
            this.resInterceptors = axios.interceptors.response.use(res => res, err => {
                this.setState({error: err});
            });
        }

        componentWillUnmount () {
            axios.interceptors.request.eject(this.reqInterceptors);
            axios.interceptors.response.eject(this.resInterceptors);
        }

        errorConfirmedHandler = () => {
            this.setState({error: false});
        }

        render () {
            return (
                <Aux>
                    <Modal show={this.state.error} >
                        {this.state.error ? this.state.error.message : null}
                        modalClosed={this.errorConfirmedHandler}
                    </Modal>
                    <WrapperComponent {...this.props} />
                </Aux>
            );
        }
    }
}

export default withErrorHandler;