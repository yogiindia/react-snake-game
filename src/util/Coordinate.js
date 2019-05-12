import { random } from 'lodash.random';

const atPosition = (x, y, diffx, diffy) => x === diffx && y === diffy;

const generateCoordinates = size => ({
    x: random(1, size),
    y: random(1, size)
});

const isCoordinatesMatching = (x, y, coordinates) => {
    const matchingCoordinates = coordinates.filter(({ snakeX, snakeY }) =>
        atPosition(x, y, snakeX, snakeY)
    );

    return matchingCoordinates.length;
};

export { generateCoordinates, atPosition, isCoordinatesMatching };
