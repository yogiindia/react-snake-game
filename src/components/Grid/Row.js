import React from 'react';
import styled from 'styled-components';
import range from 'lodash/range';

import Cell from './Cell';

const Row = ({ y, size, ...props }) => {
    const GRID = range(size + 1);
    return (
        <div className={props.className}>
            {GRID.map(x => (
                <Cell x={x} y={y} key={x} size={size} />
            ))}
        </div>
    );
};

const StyledRow = styled(Row)`
    display: flex;
    flex-direction: row;
`;

export default StyledRow;
