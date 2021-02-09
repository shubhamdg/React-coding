
import React from 'react';
import { connect } from "react-redux";
import { incrementCounter, decrementCounter, resetCounter } from "../Action/action"

class SaveCart extends React.Component {
    incrementCounter = () => {
        this.props.increment();
       
        
    }
    decrementCounter = () => {
        this.props.decrementCounter();
    }
    resetCounter = () => {
        this.props.resetCounter();
    }
    render() {

        return (
            <div className="app" id="tset">
        <div>Hello {this.props.counter}</div>
        <button onClick={this.incrementCounter}>increment</button>
        <button onClick={this.decrementCounter}>decrement</button>
        <button onClick={this.resetCounter}>reset</button>
      </div>
        
        )
    }
}

const mapStateToProps = (state) => {

    return {
        counter: state.counter
    }
};


const mapDispacthToProps = {
    increment: () => {
        return incrementCounter;
    },

    decrementCounter: () => {
        return decrementCounter
    },


    resetCounter: () => {
        return resetCounter
    }
};

const SaveCartWithRedux = connect(mapStateToProps, mapDispacthToProps)(SaveCart);
export default SaveCartWithRedux;