import React from 'react';
import './App.css';
import Display from './Dispaly';


class App extends React.Component {
    addNumber = () => {
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
                        }), displayingNumberMax: true
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
            }), displayingNumberMax: false
        })
    }
    setNumber = () => {
        if (this.state.startValue >= 0) {
            this.setState({
                controllers: this.state.controllers.map(c => {
                    if (c.name === 'INC') {
                        return { ...c, isDisabled: false }
                    } else return c
                }),
                displayingNumber: this.state.startValue,
                displayingNumberMax: false
            })
        }
    }

    wrongValueFn = () => {

    }

    onMaxValueChange = (e) => {
        if (e.currentTarget.value > 0 && e.currentTarget.value >= this.state.startValue) {
            return this.setState({
                maxValue: +e.currentTarget.value
            })

        }
    }
    onStartValueChange = (e) => {
        let currentValue = Number(e.currentTarget.value);
        if (currentValue >= 0 && currentValue <= this.state.maxValue) {
            return this.setState({
                wrongValue: false,
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
                    wrongValue: true,
                    startValue: currentValue,
                    controllers: this.state.controllers.map(c => {
                        if (c.name === 'SET','INC') {
                            return { ...c, isDisabled: true };
                        } else return c
                    })
                })
        }

    }


    state = {
        displayingNumber: 0,
        displayingNumberMax: false,
        startValue: 0,
        maxValue: Number(5),
        wrongValue: false,

        controllers: [
            { name: 'INC', buttonFn: this.addNumber, isDisabled: true },
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

