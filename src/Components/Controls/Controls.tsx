import React, { useState } from 'react';
import './Controls.css';


type Props = {
    setTimeInSeconds: Function
};

function Controls(props: Props) {
    const { setTimeInSeconds } = props;
    const [intervalId, setIntervalId] = useState<number>(0);

    const handleStartButton = () => {
        let interval: any = setInterval(() => {
            setTimeInSeconds((previousState: number) => previousState + 1)
        }, 1000);

        setIntervalId(interval);
    }

    const handleStopButton = () => {
        clearInterval(intervalId);
    }

    const handleResetButton = () => {
        clearInterval(intervalId);
        setTimeInSeconds(0);
    }


    return (
        <div className="controls-container">
            <button onClick={handleStartButton}>Start</button>
            <button onClick={handleStopButton}>Stop</button>
            <button onClick={handleResetButton}>Reset</button>
        </div>
    )
}




export default Controls
