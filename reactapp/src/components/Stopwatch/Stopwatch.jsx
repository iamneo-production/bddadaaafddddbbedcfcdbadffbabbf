import React, { useState, useEffect } from "react";

const Stopwatch = () => {
    const [time, setTime] = useState(0);
    const [isRunning, setIsRunning] = useState(false);
    const [hasStarted, setHasStarted] = useState(false);

    useEffect(() => {
        let interval;
        if (isRunning) {
            interval = setInterval(() => {
                setTime((prevTime) => prevTime + 1);
            }, 1000);
        }
        return () => clearInterval(interval);
    }, [isRunning]);

    const handleStart = () => {
        setIsRunning(true);
        setHasStarted(true);
    };

    const handlePause = () => {
        setIsRunning(false);
    };

    const handleResume = () => {
        setIsRunning(true);
    };

    const handleReset = () => {
        setIsRunning(false);
        setTime(0);
        setHasStarted(false);
    };

    return (
        <div className="watch-container">
            <h1> React Stopwatch </h1>
            <p data-testid="time">{new Date(time * 1000).toISOString().substr(11, 8)}</p>
            {!hasStarted ? (
                <div className="button-container">
                    <button data-testid="start" onClick={handleStart}>
                        Start
                    </button>
                    <button data-testid="reset" onClick={handleReset} disabled>
                        Reset
                    </button>
                </div>
            ) : isRunning ? (
                <div className="button-container">
                    <button data-testid="pause" onClick={handlePause}>
                        Pause
                    </button>
                    <button data-testid="reset" onClick={handleReset}>
                        Reset
                    </button>
                </div>
            ) : (
                <div className="button-container">
                    <button data-testid="resume" onClick={handleResume}>
                        Resume
                    </button>
                    <button data-testid="reset" onClick={handleReset}>
                        Reset
                    </button>
                </div>
            )}
        </div>
    );
};

export default Stopwatch;