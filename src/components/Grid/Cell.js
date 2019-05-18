import React from 'react';
import styled, { css } from 'styled-components';
import { isSnakeCoordinates } from '../../util/Snake';
import { isFruit } from '../../util/Fruit';

const Cell = styled.div`
    border-color: #ecf0f1;
    width: 10px;
    height: 10px;

    ${({ x, y, snake, fruit, size }) => {
        const isBorder = x === 0 || y === 0 || x === size - 1 || y === size - 1;
        const isSnake = isSnakeCoordinates(x, y, snake);

        if (isFruit(x, y, fruit)) {
            return css`
                background: #b71c1c;
            `;
        }

        if (isBorder) {
            return css`
                background: #ecf0f1;
            `;
        }

        if (isSnake) {
            return css`
                border-radius: 50%;
                background: #1b5e20;
            `;
        }
    }}
`;

export default Cell;
