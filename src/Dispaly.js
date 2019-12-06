import React from 'react';
import './App.css';
import DisplayController from './DispalyController';
import DisplayIncremental from './DispalyIncremental';


class Display extends React.Component {

    render = () => {
        return (
            <div className='mainDisplays'>
                <DisplayController onMaxValueChange={this.props.onMaxValueChange}
                onStartValueChange={this.props.onStartValueChange}
                state={this.props.state} />
               <DisplayIncremental state={this.props.state}/>
            </div>
        );
    }
}

export default Display;

