import React from 'react';
import styled from 'styled-components';
import range from 'lodash/range';

import Cell from './Cell';

const Row = ({ y, size, snake, fruit, isGameOver, ...props }) => {
    const GRID = range(size);
    return (
        <div className={props.className}>
            {GRID.map(x => (
                <Cell
                    x={x}
                    y={y}
                    key={x}
                    size={size}
                    snake={snake}
                    fruit={fruit}
                    isGameOver={isGameOver}
                />
            ))}
        </div>
    );
};

const StyledRow = styled(Row)`
    display: flex;
    flex-direction: row;
`;

export default StyledRow;
