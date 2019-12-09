import React from 'react';
import './App.css';
import Display from './Dispaly';


class App extends React.Component {
   
    componentDidMount() {
        this.restoreState();
    }

    componentDidUpdate(props, state) {
        if(state !== this.state) {
           this.saveState()
           console.warn(state)
        }
    }

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
            displayingNumber: this.state.startValue
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
                        if (c.name === 'SET', 'INC') {
                            return { ...c, isDisabled: true };
                        } else return c
                    })
                })
        }

    }


    state = {
        displayingNumber: Number(0),
        displayingNumberMax: false,
        startValue: Number(0),
        maxValue: Number(5),
        wrongValue: false,

        controllers: [
            { name: 'INC', isDisabled: true },
            { name: 'RESET', isDisabled: true },
            { name: 'SET', isDisabled: false }
        ],
    };

    saveState = () => {
        let stateAsString = JSON.stringify(this.state);
        localStorage.setItem('my-state', stateAsString);
    }

    restoreState = () => {
        let state = {
            displayingNumber: Number(0),
            displayingNumberMax: false,
            startValue: Number(0),
            maxValue: Number(5),
            wrongValue: false,
            controllers: [
                { name: 'INC', isDisabled: true },
                { name: 'RESET', isDisabled: true },
                { name: 'SET', isDisabled: false }
            ]
        };
        let stateAsString = localStorage.getItem('my-state');
        if (stateAsString != null) {
            state = JSON.parse(stateAsString);
        }
        this.setState(state);
    }


    render = () => {
        return (
            <div className='mainBody'>
                <div>
                    <Display 
                    setNumber={this.setNumber}
                    resetNumber={this.resetNumber}
                    addNumber={this.addNumber}
                    onMaxValueChange={this.onMaxValueChange}
                        onStartValueChange={this.onStartValueChange}
                        state={this.state} />
                </div>
            </div>

        );
    }
}

export default App;

