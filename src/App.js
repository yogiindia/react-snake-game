import React, { useReducer, useEffect } from 'react';

import Grid from './components/Grid';
import Header from './components/Header';

import Overlay from './components/Overlay';
import FancyButton from './components/FancyButton';
import FancyText from './components/FancyText';
import Score from './components/Score';
import ControlPanel from './components/ControlPanel';

import { DIRECTION } from './util/GameControl';
import { generateSnake } from './util/Snake';
import { generateCoordinate } from './util/Coordinate';

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

    const { play, isGameOver, score, snake, fruit } = state;

    return (
        <div className="app">
            <Header>Snake Game</Header>
            <div className="container">
                <ControlPanel
                    play={play}
                    isGameOver={isGameOver}
                    score={score}
                    togglePlay={togglePlay}
                />

                <div className="game-grid">
                    <Overlay>
                        <Score>{score}</Score>
                        <FancyText>game over</FancyText>
                        <FancyButton>Play</FancyButton>
                    </Overlay>
                    <Grid
                        size={GRID_SIZE}
                        snake={snake}
                        fruit={fruit}
                        isGameOver={isGameOver}
                    />
                </div>
            </div>
        </div>
    );
}

export default App;
