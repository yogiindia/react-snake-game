import React from 'react';
import styled, { css } from 'styled-components';

const Cell = styled.div`
    border-color: #ecf0f1;
    width: 10px;
    height: 10px;

    ${({ x, y, size }) =>
        (x === 0 || y === 0 || x === size || y === size) &&
        css`
            background: #ecf0f1;
        `}
`;

export default Cell;
