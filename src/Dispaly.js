import React from 'react';
import './App.css';
import DisplayController from './DispalyController';
import DisplayIncremental from './DispalyIncremental';


class Display extends React.Component {

    render = () => {
        return (
            <div className='mainDisplays'>
                <DisplayController
                    controllers={this.props.controllers}
                    wrongValue={this.props.wrongValue}
                    setNumber={this.props.setNumber}
                    maxValue={this.props.maxValue}
                    onMaxValueChange={this.props.onMaxValueChange}
                    onStartValueChange={this.props.onStartValueChange}
                    startValue={this.props.startValue} />
                <DisplayIncremental
                    wrongValue={this.props.wrongValue}
                    resetNumber={this.props.resetNumber}
                    addNumber={this.props.addNumber}
                    displayingNumber={this.props.displayingNumber}
                    displayingNumberMax={this.props.displayingNumberMax}
                    controllers={this.props.controllers} />
            </div>
        );
    }
}

export default Display;

