import React from 'react';
import s from './App.module.css';


const DisplayController = ({
                               controllers, wrongValue, setNumber, maxValue, onMaxValueChange, onStartValueChange,
                               startValue
                           }) => {
    let SET = controllers.find(c => c.name === 'SET')
    return (
        <div className={s.displayController}>
            {!wrongValue
                ? <div className={s.controlPanel}>
                    <div className={s.textStyle}>
                        <span>Max Value:</span>
                        <input className={s.inputStyle} value={maxValue} onChange={onMaxValueChange} type='number'/>
                    </div>
                    <div className={s.textStyle}>
                        <span>Start Value:</span>
                        <input className={s.inputStyle} value={startValue} onChange={onStartValueChange} type='number'/>
                    </div>
                </div>
                : <div className={s.controlPanel}>
                    <div className={s.textStyle}>
                        <span>Max Value:</span>
                        <input className={s.inputStyleWrong} value={maxValue} onChange={onMaxValueChange}
                               type='number'/>
                    </div>
                    <div className={s.textStyle}>
                        <span>Start Value:</span>
                        <input className={s.inputStyleWrong} value={startValue} onChange={onStartValueChange}
                               type='number'/>
                    </div>
                </div>
            }
            <div className={s.setButton}>
                <button className={s.buttonStylization}
                        disabled={SET.isDisabled}
                        onClick={setNumber}>{SET.name}</button>
            </div>
        </div>

    );
}

export default DisplayController;

