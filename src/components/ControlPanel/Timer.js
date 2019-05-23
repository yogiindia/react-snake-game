import React, { useRef, useEffect, useState } from 'react';

function Timer({ pause = true, reset = false, ...props }) {
    const [ms, setMs] = useState(0);

    const intervalRef = useRef();

    useEffect(() => {
        if (pause) {
            if (intervalRef.current) {
                clearInterval(intervalRef.current);
            }
        } else {
            const startTime = Date.now() - ms;
            const id = setInterval(() => {
                setMs(Date.now() - startTime);
            }, 1000);
            intervalRef.current = id;
        }

        if (reset) {
            setMs(0);
        }

        return () => {
            clearInterval(intervalRef.current);
        };
    }, [ms, pause, reset]);

    const convertMS = ms => {
        if (ms) {
            const seconds = Math.floor((ms % (1000 * 60)) / 1000);
            const minutes = Math.floor((ms % (1000 * 60 * 60)) / (1000 * 60));

            return `${minutes}:${seconds.toString().padStart(2, '0')}`;
        }

        return '0:00';
    };

    return <div>{props.children(convertMS(ms))}</div>;
}

export default Timer;
