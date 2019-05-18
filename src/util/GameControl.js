const DIRECTION = {
    37: 'LEFT',
    38: 'UP',
    39: 'RIGHT',
    40: 'DOWN'
};

const MOVE = {
    LEFT: (x, y, size) => {
        let newX = x - 1;
        if (newX === 0) {
            newX = size - 2;
        }
        // console.log(x, newX, size);
        return { x: newX, y };
    },
    UP: (x, y, size) => {
        let newY = y - 1;
        if (newY === 0) {
            newY = size - 2;
        }
        // console.log(x, newY, size);
        return { x, y: newY };
    },
    RIGHT: (x, y, size) => {
        let newX = x + 1;

        // console.log(x, newX, size);
        if (newX === size - 1) {
            newX = 1;
        }
        return { x: newX, y };
    },
    DOWN: (x, y, size) => {
        let newY = y + 1;
        if (newY === size - 1) {
            newY = 1;
        }
        // console.log(x, newY, size);
        return { x, y: newY };
    }
};

export { DIRECTION, MOVE };
