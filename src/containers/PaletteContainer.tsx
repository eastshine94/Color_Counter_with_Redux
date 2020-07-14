import React, { Component } from 'react';
import { Dispatch } from 'redux';
import { connect } from 'react-redux';
import Palette from '~/components/Palette';
import { changeColor, ChangeColorAction } from '~/store/modules/counter';
import { RootState } from '~/store/modules';

interface Props {
    color: string;
    changeColor(color: string) : ChangeColorAction;
}

class PaletteContainer extends Component<Props> {
    handleSelect = (color: string) => {
        const { changeColor } = this.props;
        changeColor(color);
    }
    render() {
        const { color } = this.props;
        return <Palette onSelect={this.handleSelect} selected={color} />;
    }
}
const mapStateToProps = (state: RootState) => ({
    color: state.counter.color,
})
const mapDispatchToProps = (dispatch: Dispatch) => ({
    changeColor: (color: string) => dispatch(changeColor(color))
})

export default connect(
    mapStateToProps,
    mapDispatchToProps
    )(PaletteContainer);