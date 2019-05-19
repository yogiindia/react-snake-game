import React, { useReducer, useEffect } from 'react';

import Grid from './components/Grid';
import Header from './components/Header';
import Text from './components/Text';
import Button from './components/Button';
import { DIRECTION } from './util/GameControl';
import { generateSnake } from './util/Snake';
import { generateCoordinate } from './util/Coordinate';
import Timer from './components/Timer';

import GameReducer from './Reducers';

import './App.css';

const GRID_SIZE = 30;

const initialState = {
    score: '000',
    size: GRID_SIZE,
    direction: DIRECTION[39],
    isGameOver: false,
    play: false,
    snake: generateSnake(GRID_SIZE),
    fruit: generateCoordinate(GRID_SIZE)
};

function App() {
    const [state, dispatch] = useReducer(GameReducer, initialState);

    const changeDirection = e => {
        const direction = DIRECTION[e.keyCode];

        if (direction) {
            dispatch({
                type: 'CHANGE_SNAKE_DIRECTION',
                direction
            });
        }
    };

    useEffect(() => {
        window.addEventListener('keyup', changeDirection, false);

        return () => {
            window.removeEventListener('keyup', changeDirection, false);
        };
    }, []);

    useEffect(() => {
        const snakeMovementChecker = () => {
            dispatch({
                type: 'MOVE_SNAKE'
            });
        };

        console.log('Setting Interval');
        const interval = setInterval(snakeMovementChecker, 150);

        return () => {
            clearInterval(interval);
        };
    }, [dispatch]);

    const togglePlay = e => {
        dispatch({
            type: 'TOGGLE_PLAY'
        });
    };

    return (
        <div className="app">
            <Header>Snake Game</Header>
            <div className="container">
                <div className="control-panel">
                    <Timer on={state.play}>
                        {timer => <Text>time :- {timer}</Text>}
                    </Timer>
                    <Button onClick={togglePlay}>Play</Button>
                    <Text>score :- {state.score}</Text>
                </div>
                <Grid
                    size={GRID_SIZE}
                    snake={state.snake}
                    fruit={state.fruit}
                    isGameOver={state.isGameOver}
                />
            </div>
        </div>
    );
}

export default App;
