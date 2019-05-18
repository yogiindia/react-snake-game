import { atPosition } from './Coordinate';

const isFruit = (x, y, fruit) => {
    return atPosition(x, y, fruit.x, fruit.y);
};

export { isFruit };
