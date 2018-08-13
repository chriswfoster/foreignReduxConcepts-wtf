import React, { Component } from "react";
import store from '../store'
import something from '../Something/something.js'
import {connect} from 'react-redux';

class Other extends Component {
    constructor() {
        super();
        this.state = {};
    }

    render() {
        const getStore = store.getState;
        console.log(getStore());
        return (
            <div>
                <p>The Other Page!</p>
                <button onClick={()=> this.props.anotherFunctionBelow()}>Other button</button>
                <button onClick={()=> this.props.fireSomethingOff()}> Something</button>
            </div>
        );
    }
}

const mapStateToProps = state => state;

const mapDispatchToProps = dispatch => ({
    anotherFunctionBelow() {
        dispatch({ type: "SOMETHING_ELSE", payload: "hello" })
    },
    fireSomethingOff() {
        dispatch(something())
    }
})

export default connect(mapStateToProps, mapDispatchToProps)(Other);