import { MOVE } from '../util/GameControl';
import { generateCoordinate } from '../util/Coordinate';
import {
    isSnakeHaveEatenFruit,
    getSnakeHead,
    getSnakeWithoutEnd,
    isSnakeHit
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
            const { snake, fruit, direction, size, score } = state;

            if (isSnakeHit(snake)) {
                return {
                    ...state,
                    isGameOver: true
                };
            } else {
                const isSnakeEaten = isSnakeHaveEatenFruit(snake, fruit);

                const currentSnakeHead = getSnakeHead(snake);

                const newSnakeHead = MOVE[direction](
                    currentSnakeHead.x,
                    currentSnakeHead.y,
                    size
                );

                const newSnakeTail = isSnakeEaten
                    ? state.snake
                    : getSnakeWithoutEnd(snake);

                const newFruit = isSnakeEaten
                    ? generateCoordinate(size)
                    : fruit;

                const newScore = isSnakeEaten
                    ? (parseInt(score) + 1).toString().padStart(5, '0')
                    : score;

                return {
                    ...state,
                    score: newScore,
                    snake: [newSnakeHead, ...newSnakeTail],
                    fruit: newFruit
                };
            }
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
