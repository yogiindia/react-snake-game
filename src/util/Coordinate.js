import { random } from 'lodash';

const atPosition = (x, y, diffx, diffy) => x === diffx && y === diffy;

const generateCoordinate = size => {
    return {
        x: random(1, size - 2),
        y: random(1, size - 2)
    };
};

const isCoordinatesMatching = (x, y, coordinates) => {
    const matchingCoordinates = coordinates.filter(({ x: snakeX, y: snakeY }) =>
        atPosition(x, y, snakeX, snakeY)
    );

    return matchingCoordinates.length;
};

export { generateCoordinate, atPosition, isCoordinatesMatching };
