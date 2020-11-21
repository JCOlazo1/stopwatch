import React, { useState, useEffect } from 'react'
import './Main.css';
import CalculateTimer from '../../Helper/CalculateTimer';
import Controls from '../Controls/Controls'

const Main = () => {
    const [timeInSeconds, setTimeInSeconds] = useState<number>(0);
    const [timerArray, setTimerArray] = useState<Array<number | string>>([]);

    useEffect(() => {
        let timeArray: Array<number | string> = CalculateTimer(timeInSeconds);
        setTimerArray(timeArray);
    }, [timeInSeconds])
    // This ^ useEffect's dependency comes from 'timeInSeconds'; 
    // it only activates if timeInSeconds changes


    return (
        <main>
            <div className="time-container">
                <p className="timer-text">{timerArray[0]}</p>
                <span>:</span>
                <p className="timer-text">{timerArray[1]}</p>
                <span>:</span>
                <p className="timer-text">{timerArray[2]}</p>
            </div>
            <Controls setTimeInSeconds={setTimeInSeconds} />
        </main>
    )
}

export default Main
