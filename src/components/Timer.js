import React, { useState, useEffect } from 'react';

function Timer(props) {
    const [counter, setCounter] = useState('0:00');

    useEffect(() => {
        const start = new Date().getTime();

        const interval = () => {
            const end = new Date().getTime();
            const duration = end - start;
            const seconds = Math.floor((duration / 1000) % 60);
            const minutes = Math.floor((duration / (1000 * 60)) % 60);
            // const hours = Math.floor((duration / (1000 * 60 * 60)) % 24);

            setCounter(() => {
                return ` ${minutes} : ${seconds.toString().padStart(2, '0')}`;
            });
        };

        setInterval(interval, 1000);

        return () => clearInterval(interval);
    }, []);

    return <>{props.children(counter)}</>;
}

export default Timer;
