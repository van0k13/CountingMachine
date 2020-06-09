import React from 'react';
import s from './App.module.css';


const DisplayIncremental = ({
                                controllers, wrongValue, displayingNumberMax, displayingNumber,
                                addNumber, resetNumber
                            }) => {

    const INC = controllers.find(c => c.name === 'INC')

    const RESET = controllers.find(c => c.name === 'RESET')
    return (
        <div className={s.displayIncremental}>
            {!wrongValue && !displayingNumberMax &&
            <div className={s.incNumber}>{displayingNumber}</div>}
            {wrongValue &&
            <div className={s.incNumberWrong}>Wrong value! Please set another start
                value that is more then a zero and less then a Max Value</div>}
            {displayingNumberMax &&
            <div className={s.incNumberMax}>Max Value!<br/>{displayingNumber}</div>}
            <div className={s.buttonIncReset}>
                <button
                    disabled={INC.isDisabled}
                    onClick={addNumber}
                    className={s.buttonStylization}>{INC.name}</button>
                <button
                    disabled={RESET.isDisabled}
                    onClick={resetNumber}
                    className={s.buttonStylization}>{RESET.name}</button>
            </div>
        </div>
    );
}


export default DisplayIncremental;

