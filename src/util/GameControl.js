const KEY = {
    37: 'LEFT',
    38: 'UP',
    39: 'RIGHT',
    40: 'DOWN'
};

const SNAKE_DIRECTION = {
    LEFT: (x, y, size) => {
        let newX = x - 1;
        if (newX === 0) {
            newX = size;
        }
        return { x: newX, y };
    },
    UP: (x, y, size) => {
        let newY = y - 1;
        if (newY === 0) {
            newY = size;
        }
        return { x, y: newY };
    },
    RIGHT: (x, y) => {
        let newX = x + 1;
        if (newX === 30) {
            newX = 0;
        }
        return { x: newX, y };
    },
    BOTTOM: (x, y, size) => {
        let newY = y + 1;
        if (newY === size) {
            newY = 0;
        }
        return { x, y: newY };
    }
};

export { KEY, SNAKE_DIRECTION };
