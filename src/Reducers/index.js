import { MOVE } from '../util/GameControl';
import { generateCoordinate } from '../util/Coordinate';
import {
    isSnakeHaveEatenFruit,
    getSnakeHead,
    getSnakeWithoutEnd
} from '../util/Snake';

const reducer = (state, action) => {
    switch (action.type) {
        case 'CHANGE_SNAKE_DIRECTION': {
            const { direction } = action;
            return {
                ...state,
                direction
            };
        }

        case 'MOVE_SNAKE': {
            const { snake, fruit, direction } = state;
            const isSnakeEaten = isSnakeHaveEatenFruit(snake, fruit);

            const currentSnakeHead = getSnakeHead(snake);

            const newSnakeHead = MOVE[direction](
                currentSnakeHead.x,
                currentSnakeHead.y
            );

            const newSnakeTail = isSnakeEaten
                ? state.snake
                : getSnakeWithoutEnd(snake);

            const newFruit = isSnakeEaten
                ? generateCoordinate(state.size)
                : fruit;

            return {
                ...state,
                snake: [newSnakeHead, ...newSnakeTail],
                fruit: newFruit
            };
        }

        case 'GAME_OVER': {
            return {
                ...state,
                isGameOver: true
            };
        }

        default:
            throw new Error();
    }
};

export default reducer;
