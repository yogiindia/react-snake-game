import React from 'react';
import styled, { css } from 'styled-components';
import { isSnakeCoordinates, isSnakeHead } from '../../util/Snake';
import { isFruit } from '../../util/Fruit';

const Cell = styled.div`
    border-color: #ecf0f1;
    width: 10px;
    height: 10px;

    ${({ x, y, snake, fruit, size }) => {
        const isBorder = x === 0 || y === 0 || x === size || y === size;
        const isSnake = isSnakeCoordinates(x, y, snake);
        const isHead = isSnakeHead(x, y, snake);

        if (isFruit(x, y, fruit)) {
            return css`
                background: #b71c1c;
            `;
        }

        if (isHead) {
            return css`
                border-radius: 50%;
                background: #ecf0f1;
            `;
        }

        if (isBorder) {
            return css`
                background: #ecf0f1;
            `;
        }

        if (isSnake) {
            return css`
                background: #1b5e20;
            `;
        }
    }}
`;

export default Cell;
