import React from 'react';
import './App.css';
import Button from './Button'


class Buttons extends React.Component {

    render = () => {
        
        let buttonsElements = this.props.controllers.map( buttons =>
             <Button buttonFn={buttons.buttonFn}
                     name={buttons.name}
                     isDisabled={buttons.isDisabled}/>)

        return (
            <div className='buttons'>     
            {buttonsElements}
           </div>
        );
    }
}

export default Buttons;

