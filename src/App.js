import React from 'react';
import './App.css';
import Display from './Dispaly';
import { connect } from 'react-redux';
import { addNumber, resetNumber, maxValueChange, startValueChange, setValue } from './reducer'


class App extends React.Component {

    addNumber = () => {
        this.props.addNumber(Number(this.props.maxValue))
    }


    resetNumber = () => {
        this.props.resetNumber()
    }
    setNumber = () => {
        
        this.props.setValue()
    }


    onMaxValueChange = (e) => {
        this.props.maxValueChange(Number(e.currentTarget.value))
    }

    onStartValueChange = (e) => {
        this.props.startValueChange(Number(e.currentTarget.value))
    }

    render = () => {
        return (
            <div className='mainBody'>
                <div>
                    <Display
                        wrongValue={this.props.wrongValue}
                        startValue={this.props.startValue}
                        onMaxValueChange={this.onMaxValueChange}
                        onStartValueChange={this.onStartValueChange}
                        maxValue={this.props.maxValue}
                        displayingNumber={this.props.displayingNumber}
                        displayingNumberMax={this.props.displayingNumberMax}
                        controllers={this.props.controllers}
                        addNumber={this.addNumber}
                        resetNumber={this.resetNumber}
                        setNumber={this.setNumber} />
                </div>
            </div>

        );
    }
}

const mstp = (state) => {
    return {
        displayingNumber: state.displayingNumber,
        displayingNumberMax: state.displayingNumberMax,
        startValue: state.startValue,
        maxValue: state.maxValue,
        wrongValue: state.wrongValue,
        controllers: state.controllers
    }
}

const ConnectedApp = connect(mstp, {
    addNumber, resetNumber, maxValueChange,
    startValueChange, setValue
})(App)

export default ConnectedApp;

