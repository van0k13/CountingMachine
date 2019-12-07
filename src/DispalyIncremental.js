import React from 'react';
import './App.css';


class DisplayIncremental extends React.Component {

    render = () => {
        let INC = this.props.state.controllers[0].name;
        let RESET = this.props.state.controllers[1].name
        return (
            <div className='displayIncremental'>
                {!this.props.state.wrongValue && !this.props.state.displayingNumberMax &&
                    <div className='incNumber'>{this.props.state.displayingNumber}</div>}
                {this.props.state.wrongValue &&
                    <div className='incNumberWrong'>Wrong value! Please set another start
                     value that is more then a zero and less then a Max Value</div>}
                {this.props.state.displayingNumberMax &&
                    <div className='incNumberMax'>Max Value!<br/>{this.props.state.displayingNumber}</div>}
                <div className='buttonIncReset'>
                    <button
                        disabled={this.props.state.controllers[0].isDisabled}
                        onClick={this.props.state.controllers[0].buttonFn}
                        className='buttonStylization'>{INC}</button>
                    <button
                        disabled={this.props.state.controllers[1].isDisabled}
                        onClick={this.props.state.controllers[1].buttonFn}
                        className='buttonStylization'>{RESET}</button>
                </div>
            </div>
        );
    }
}

export default DisplayIncremental;

