import React from 'react';
import './App.css';


class DisplayController extends React.Component {
    render = () => {
        let SET = this.props.controllers.find(c => {
            if (c.name === 'SET') return c
        })
        let onMaxValueChange = this.props.onMaxValueChange
        let onStartValueChange = this.props.onStartValueChange
        let setThatShit = this.props.setNumber
        return (
            <div className='displayController'>
                {!this.props.wrongValue && <div className='controlPanel'>
                    <div className='textStyle'>Max Value:
                            <input className='inputStyle'
                            value={this.props.maxValue}
                            onChange={onMaxValueChange}
                            type='number'></input>
                    </div>
                    <div className='textStyle'>Start Value:
                            <input className='inputStyle'
                            value={this.props.startValue}
                            onChange={onStartValueChange}
                            type='number'></input>
                    </div>
                </div>}
                {this.props.wrongValue && <div className='controlPanel'>
                    <div className='textStyle'>Max Value:
                            <input className='inputStyleWrong'
                            value={this.props.maxValue}
                            onChange={onMaxValueChange}
                            type='number'></input>
                    </div>
                    <div className='textStyle'>Start Value:
                            <input className='inputStyleWrong'
                            value={this.props.startValue}
                            onChange={onStartValueChange}
                            type='number'></input>
                    </div>
                </div>}
                <div className='setButton'>
                    <button className='buttonStylization'
                    disabled={SET.isDisabled}
                        onClick={setThatShit}>{SET.name}</button>
                </div>
            </div>

        );
    }
}

export default DisplayController;

