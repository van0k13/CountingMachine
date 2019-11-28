import React from 'react';
import './App.css';


class Display extends React.Component {
    render = () => {
        return (
            <div className='display'>
                {this.props.number}
            </div>
        );
    }
}

export default Display;

