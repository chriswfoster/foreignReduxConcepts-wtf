import React, { Component } from "react";

import {connect} from 'react-redux';

class Other extends Component {
    constructor() {
        super();
        this.state = {};
    }

    render() {
        return (
            <div>
                <p>The Other Page!</p>
                <button onClick={()=> this.props.anotherFunctionBelow()}>Other button</button>
            </div>
        );
    }
}

const mapStateToProps = state => state;

const mapDispatchToProps = dispatch => ({
    anotherFunctionBelow() {
        dispatch({ action: "SOMETHING_ELSE", type: "hello" })
    }
})

export default connect(mapStateToProps, mapDispatchToProps)(Other);