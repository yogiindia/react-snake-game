import { range } from 'lodash';
import {
    isCoordinatesMatching,
    atPosition,
    generateCoordinate
} from './Coordinate';

const isSnakeCoordinates = (x, y, coordinates) =>
    isCoordinatesMatching(x, y, coordinates);

const getSnakeHead = snake => snake[0];

const isSnakeHead = (x, y, snake) => {
    const head = getSnakeHead(snake);

    return atPosition(x, y, head.x, head.y);
};

const getSnakeTail = snake => snake.slice(1);
const getSnakeWithoutEnd = snake => snake.slice(0, snake.length - 1);

const isSnakeHit = (snake, barrierCoordinates) => {
    const { x, y } = getSnakeHead(snake);
    const tail = getSnakeTail(snake);

    return isSnakeCoordinates(x, y, barrierCoordinates || tail);
};

const isSnakeHaveEatenFruit = (snake, fruit) => {
    const { x, y } = getSnakeHead(snake);
    return atPosition(x, y, fruit.x, fruit.y);
};

const generateSnake = size => {
    const { x, y } = generateCoordinate(size - 10);

    let values = range(y, y + 5);
    return values.map(value => ({ x, y: value }));
};

export {
    isSnakeCoordinates,
    getSnakeHead,
    isSnakeHit,
    isSnakeHaveEatenFruit,
    generateSnake,
    isSnakeHead,
    getSnakeTail,
    getSnakeWithoutEnd
};
