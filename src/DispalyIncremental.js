import React from 'react';
import './App.css';


class DisplayIncremental extends React.Component {

    render = () => {
        return (
            <div className='displayIncremental'>
                <div className='incNumber'>{this.props.state.displayingNumber}</div>
                <div className='buttonIncReset'>
                    <button
                        disabled={this.props.state.controllers[0].isDisabled}
                        onClick={this.props.state.controllers[0].buttonFn}
                        className='buttonStylization'>{this.props.state.controllers[0].name}</button>
                    <button
                        disabled={this.props.state.controllers[1].isDisabled}
                        onClick={this.props.state.controllers[1].buttonFn}
                        className='buttonStylization'>{this.props.state.controllers[1].name}</button>
                </div>
            </div>
        );
    }
}

export default DisplayIncremental;

