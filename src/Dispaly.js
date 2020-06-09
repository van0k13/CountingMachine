import React from 'react';
import s from './App.module.css';
import DisplayController from './DispalyController';
import DisplayIncremental from './DispalyIncremental';


const Display = ({
                     controllers, wrongValue, setNumber, maxValue, onMaxValueChange, onStartValueChange,
                     startValue, displayingNumber, displayingNumberMax, resetNumber, addNumber
                 }) => {

    return (
        <div className={s.mainDisplays}>

            <DisplayController
                controllers={controllers}
                wrongValue={wrongValue}
                setNumber={setNumber}
                maxValue={maxValue}
                onMaxValueChange={onMaxValueChange}
                onStartValueChange={onStartValueChange}
                startValue={startValue}/>

            <DisplayIncremental
                wrongValue={wrongValue}
                resetNumber={resetNumber}
                addNumber={addNumber}
                displayingNumber={displayingNumber}
                displayingNumberMax={displayingNumberMax}
                controllers={controllers}/>
        </div>
    );
}

export default Display;

