import React from 'react';
import styled from 'styled-components';
import range from 'lodash/range';

import Row from './Row';

const Grid = ({ size, ...props }) => {
    const GRID = range(size + 1);

    return (
        <div className={props.className}>
            {GRID.map(y => (
                <Row y={y} key={y} size={size} />
            ))}
        </div>
    );
};

const StyledGrid = styled(Grid)`
    display: flex;
    flex-direction: column;
`;

export default StyledGrid;
