import React, {Component,  ChangeEvent, FormEvent} from 'react';
import { connect } from 'react-redux';
import {actionCreators as WaitingActions, WaitingState } from '~/store/modules/waiting';
import WaitingList from '~/components/WaitingList';
import { RootState } from '~/store/modules';
import { Dispatch, bindActionCreators } from 'redux';

interface Props extends WaitingState{
    waitingActions: typeof WaitingActions;
}

class WaitingListContainer extends Component<Props> {
    handleChange = (e:ChangeEvent<HTMLInputElement>) => {
        const { waitingActions } = this.props;
        waitingActions.changeInput(e.target.value);
    }

    handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const { waitingActions } = this.props;
        waitingActions.create();
        waitingActions.changeInput('');
    }

    handleEnter = (id: number) => {
        const { waitingActions } = this.props;
        waitingActions.enter(id);
    }

    handleLeave = (id: number) => {
        const { waitingActions } = this.props;
        waitingActions.leave(id);
    }
    
    render() {
        const {input, list} = this.props;
        return (
            <WaitingList
                input = {input}
                waitingList = {list}
                onChange={this.handleChange}
                onSubmit={this.handleSubmit}
                onEnter={this.handleEnter}
                onLeave={this.handleLeave}
            />
        )
    }
}

const mapStateToProps = ( {waiting}: RootState ) => ({
    input: waiting.input,
    list: waiting.list
});

const mapDispatchToProps = (dispatch: Dispatch) => ({
    waitingActions: bindActionCreators(WaitingActions, dispatch)
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(WaitingListContainer)

