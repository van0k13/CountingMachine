import React from 'react';
import './App.css';
import Display from './Dispaly';
import Buttons from './Buttons';


class App extends React.Component {
    addNumber = () => {
        let maxValue = this.state.maxValue
        let plusNum = this.state.displayingNumber
        if(this.state.displayingNumber > 0){
        this.setState({controllers: this.state.controllers.map(c => {
            if(c.name === 'RESET') {
                return {...c, isDisabled: false}
            }else return c
        })})}
        if (plusNum < maxValue) {

        this.setState({displayingNumber: this.state.displayingNumber + 1 } , ()=> {
            if(this.state.displayingNumber === this.state.maxValue) {

                this.setState( {controllers:  this.state.controllers.map(c => {
                    if(c.name === 'INC'){ 
                        return {...c, isDisabled: true}
                    } else return c
                })}) 
            }})
        }   
    }


    resetNumber = () => {
       
        this.setState({
            displayingNumber: 0 })

            this.setState( {controllers:  this.state.controllers.map(c => {
                if(c.name === 'INC'){ 
                    return {...c, isDisabled: false}
                } else return c
            })} )
    }

    state = {
        displayingNumber: 0,
        maxValue: 5,
          
        controllers: [
            { name: 'INC', buttonFn: this.addNumber, isDisabled: false },
            { name: 'RESET', buttonFn: this.resetNumber, isDisabled: true }
        ],
    };


    render = () => {
        return (
            <div className='mainBody'>
                <div className='controlcontainer'>
                    
                </div>
                <div className='container'>
                    <Display number={this.state.displayingNumber} />
                    <Buttons controllers={this.state.controllers} />
                </div>
            </div>

        );
    }
}

export default App;

