import React, { Component } from 'react';

const RefsHOC = WrappedComponent => {
    return class Refs extends Component {
        constructor(props) {
            super(props);
            this.state = {
                value: ''
            }
            this.setStateFromInstance = this.setStateFromInstance.bind(this);
        }

        setStateFromInstance() {
            this.setState({
                value: this.setStateFromInstance.getCurrentState()
            })
        }

        render() {
            return(
                <div>
                    <WrappedComponent {...this.props} refs = { (instance) => this.instance = instance } />
                    <button onClick = {this.setStateFromInstance }> Submit </button>
                    <h3> The value is {this.state.value} </h3>
                </div>
            );
        }
    }
}

export default RefsHOC;