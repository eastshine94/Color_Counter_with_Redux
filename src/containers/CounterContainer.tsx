import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Dispatch } from 'redux';
import { increment, decrement, IncrementAction, DecrementAction, CounteState } from '../store/modules/counter';
import { RootState } from '~/store/modules';
import { Counter } from '~/components';
interface Props extends CounteState {
    increment() : IncrementAction;
    decrement() : DecrementAction;
}

class CounterContainer extends Component<Props> {
    handleIncrement = () => {
        this.props.increment();
    };
    handleDecrement = () => {
        this.props.decrement();
    }
    render(){
        const { color, number } = this.props;
        return(
            <Counter
                color={color}
                value={number}
                onIncrement={this.handleIncrement}
                onDecrement={this.handleDecrement}
            />
        )
    }
}

const mapStateProps = ({counter}: RootState) => ({
    color: counter.color,
    number: counter.number
})

const mapDispatchToProps = (dispatch: Dispatch) => ({
    increment: () => dispatch(increment()),
    decrement: () => dispatch(decrement()),
})

export default connect(
    mapStateProps,
    mapDispatchToProps,
)(CounterContainer)