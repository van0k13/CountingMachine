import React from 'react';
import './App.css';


class DisplayController extends React.Component {
    render = () => {
        let onMaxValueChange = this.props.onMaxValueChange
        let onStartValueChange = this.props.onStartValueChange
        let disabled = this.props.state.controllers[2].isDisabled
        let onClick = this.props.state.controllers[2].buttonFn
        let name = this.props.state.controllers[2].name
        return (
            <div className='displayController'>
               {!this.props.state.wrongValue && <div className='controlPanel'>
                    <div className='textStyle'>Max Value:
                            <input className='inputStyle'
                            value={this.props.state.maxValue}
                            onChange={onMaxValueChange}
                            type='number'></input>
                    </div>
                    <div className='textStyle'>Start Value:
                            <input className='inputStyle'
                            value={this.props.state.startValue}
                            onChange={onStartValueChange}
                            type='number'></input>
                    </div>
                </div>}
                {this.props.state.wrongValue && <div className='controlPanel'>
                    <div className='textStyle'>Max Value:
                            <input disabled={true} className='inputStyleWrong'
                            value={this.props.state.maxValue}
                            onChange={onMaxValueChange}
                            type='number'></input>
                    </div>
                    <div className='textStyle'>Start Value:
                            <input className='inputStyleWrong'
                            value={this.props.state.startValue}
                            onChange={onStartValueChange}
                            type='number'></input>
                    </div>
                </div>}
                <div className='setButton'>
                    <button className='buttonStylization'
                        disabled={disabled}
                        onClick={onClick}
                    >{name}</button>
                </div>
            </div>

        );
    }
}

export default DisplayController;

