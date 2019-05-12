import { isCoordinatesMatching, atPosition } from './Coordinate';

const isSnakeCoordinates = (x, y, coordinates) =>
    isCoordinatesMatching(x, y, coordinates);

const getSnakeHead = snake => snake.coordinates[0];

const getSnakeTail = snake => snake.coordinates.slice(1);

const isSnakeHit = (snake, barrierCoordinates) => {
    const { x, y } = getSnakeHead(snake);
    const tail = getSnakeTail(snake);

    return isSnakeCoordinates(x, y, barrierCoordinates || tail);
};

const isSnakeHaveEaten = (snake, fruit) => {
    const { x, y } = getSnakeHead(snake);
    return atPosition(x, y, fruit.x, fruit.y);
};

export { isSnakeCoordinates, getSnakeHead, isSnakeHit, isSnakeHaveEaten };
