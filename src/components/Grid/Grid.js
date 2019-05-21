import React from 'react';
import styled from 'styled-components';
import range from 'lodash/range';

import Row from './Row';

const Grid = ({ size, snake, fruit, isGameOver, ...props }) => {
    const GRID = range(size);

    return (
        <div className={props.className}>
            {GRID.map(y => (
                <Row
                    y={y}
                    key={y}
                    size={size}
                    snake={snake}
                    fruit={fruit}
                    isGameOver={isGameOver}
                />
            ))}
        </div>
    );
};

const StyledGrid = styled(Grid)`
    display: flex;
    flex-direction: column;
`;

export default StyledGrid;
