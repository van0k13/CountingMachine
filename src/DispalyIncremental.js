import React from 'react';
import './App.css';


class DisplayIncremental extends React.Component {

    render = () => {
       let INC = this.props.controllers.find(c => {
            if(c.name === 'INC') return c
            })
        
        let RESET = this.props.controllers.find(c => {
            if (c.name === 'RESET')  return c
        })
        return (
            <div className='displayIncremental'>
                {!this.props.wrongValue && !this.props.displayingNumberMax &&
                    <div className='incNumber'>{this.props.displayingNumber}</div>}
                {this.props.wrongValue &&
                    <div className='incNumberWrong'>Wrong value! Please set another start
                     value that is more then a zero and less then a Max Value</div>}
                {this.props.displayingNumberMax &&
                    <div className='incNumberMax'>Max Value!<br />{this.props.displayingNumber}</div>}
                <div className='buttonIncReset'>
                    <button
                        disabled={INC.isDisabled}
                        onClick={this.props.addNumber}
                className='buttonStylization'>{INC.name}</button>
                    <button
                        disabled={RESET.isDisabled}
                        onClick={this.props.resetNumber}
                className='buttonStylization'>{RESET.name}</button>
                </div>
            </div>
        );
    }
}

export default DisplayIncremental;

