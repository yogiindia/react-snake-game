import React from 'react';
import styled, { css, keyframes } from 'styled-components';
import { flash } from 'react-animations';
import { isSnakeCoordinates } from '../../util/Snake';
import { isFruit } from '../../util/Fruit';

const flashAnimation = keyframes`${flash}`;

const Cell = styled.div`
    border-color: #ecf0f1;
    width: 15px;
    height: 15px;

    ${({ x, y, snake, fruit, size, isGameOver }) => {
        const isBorder = x === 0 || y === 0 || x === size - 1 || y === size - 1;
        const isSnake = isSnakeCoordinates(x, y, snake);

        if (isFruit(x, y, fruit)) {
            return css`
                background: #7f0000;
            `;
        }

        if (isBorder) {
            return css`
                background: #ecf0f1;
            `;
        }

        if (isSnake) {
            if (isGameOver) {
                return css`
                    border-radius: 50%;
                    background: #c9a100;
                    animation: 1s ${flashAnimation};
                `;
            }

            return css`
                border-radius: 50%;
                background: #c9a100;
            `;
        }
    }}
`;

export default Cell;
