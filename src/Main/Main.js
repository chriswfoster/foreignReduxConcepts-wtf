import React, { Component } from "react";
import { consoleLogger } from './';
import { connect } from 'react-redux';

class Main extends Component {
    constructor() {
        super();
        this.state = {};
    }

    render() {
        console.log(this.props)
        return (
            <div>
                <p>The Main Page!</p>
                <button onClick={()=> this.props.aFunctionCreatedBelow()}> Click me</button>
            </div>
        );
    }
}

const mapStateToProps = state => state;

const mapDispatchToProps = dispatch => ({
    aFunctionCreatedBelow() {
        dispatch(consoleLogger())
    },
})

export default connect(mapStateToProps, mapDispatchToProps)(Main);