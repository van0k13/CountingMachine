import React from 'react';
import './App.css';


class Button extends React.Component {
    render = () => {

        return (
            
            <div > 
              <button className='button' disabled={this.props.isDisabled}
               onClick={this.props.buttonFn}>{this.props.name}</button>            
            </div>
        );
    }
}

export default Button;

