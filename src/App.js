import React, { useReducer, useEffect } from 'react';

import Grid from './components/Grid';
import Header from './components/Header';
import Text from './components/Text';
import Button from './components/Button';
import { DIRECTION } from './util/GameControl';
import { generateSnake, isSnakeHit } from './util/Snake';
import { generateCoordinate } from './util/Coordinate';
import GameReducer from './Reducers';

import './App.css';

const GRID_SIZE = 35;

const initialState = {
    size: GRID_SIZE,
    direction: DIRECTION[39],
    isGameOver: false,
    snake: generateSnake(GRID_SIZE),
    fruit: generateCoordinate(GRID_SIZE)
};

function App() {
    const [state, dispatch] = useReducer(GameReducer, initialState);

    console.log(state);
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
            if (isSnakeHit(state.snake)) {
                dispatch({
                    type: 'GAME_OVER'
                });
            } else {
                dispatch({
                    type: 'MOVE_SNAKE'
                });
            }
        };

        const interval = setInterval(snakeMovementChecker, 1000);

        return () => {
            clearInterval(interval);
        };
    }, [state]);

    return (
        <div className="app">
            <Header>Snake Game</Header>
            <div className="container">
                <div className="control-panel">
                    <Text>time : 00</Text>
                    <Button>Play</Button>
                    <Text>score: 00</Text>
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
