import React from 'react';
import './App.css';
import Display from './Dispaly';


class App extends React.Component {
    addNumber = () => {
        debugger
        let maxValue = this.state.maxValue
        let plusNum = Number(this.state.displayingNumber)
        if (this.state.displayingNumber > 0) {
            this.setState({
                controllers: this.state.controllers.map(c => {
                    if (c.name === 'RESET') {
                        return { ...c, isDisabled: false }
                    } else return c
                })
            })
        }
        if (plusNum < maxValue) {
            this.setState({ displayingNumber: +this.state.displayingNumber + 1 }, () => {
                if (this.state.displayingNumber === this.state.maxValue) {
                    this.setState({
                        controllers: this.state.controllers.map(c => {
                            if (c.name === 'INC') {
                                return { ...c, isDisabled: true }
                            } else return c
                        })
                    })
                }
            })
        }
    }
    resetNumber = () => {
        this.setState({
            displayingNumber: 0
        })

        this.setState({
            controllers: this.state.controllers.map(c => {
                if (c.name === 'INC') {
                    return { ...c, isDisabled: false }
                } else return c
            })
        })
    }
    setNumber = () => {
        if (this.state.startValue >= 0) {
            this.setState({ displayingNumber: this.state.startValue,
                controllers: this.state.controllers.map(c => {
                    if (c.name === 'RESET') {
                        return { ...c, isDisabled: true }
                    } else return c
                })
            })
        }
    }

    onMaxValueChange = (e) => {
        if (e.currentTarget.value > 0) {
            return this.setState({
                maxValue: e.currentTarget.value
            })

        }
    }
    onStartValueChange = (e) => {
        let currentValue = Number(e.currentTarget.value);
        if (currentValue >= 0) {
            return this.setState({
                startValue: e.currentTarget.value,
                controllers: this.state.controllers.map(c => {
                    if (c.name === 'SET') {
                        return { ...c, isDisabled: false };
                    } else return c
                })
            })   
        } else {
            return this.setState(
                {
                    startValue: currentValue,
                    controllers: this.state.controllers.map(c => {
                        if (c.name === 'SET') {
                            return { ...c, isDisabled: true };
                        } else return c
                    })
                })
        }
        
    }


    state = {
        displayingNumber: 0,
        startValue: 0,
        maxValue: 5,

        controllers: [
            { name: 'INC', buttonFn: this.addNumber, isDisabled: false },
            { name: 'RESET', buttonFn: this.resetNumber, isDisabled: true },
            { name: 'SET', buttonFn: this.setNumber, isDisabled: false }
        ],
    };


    render = () => {
        return (
            <div className='mainBody'>
                <div>
                    <Display onMaxValueChange={this.onMaxValueChange}
                        onStartValueChange={this.onStartValueChange}
                        state={this.state} />
                </div>
            </div>

        );
    }
}

export default App;

