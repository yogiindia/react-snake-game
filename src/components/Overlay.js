import React from 'react';
import styled from 'styled-components';

const Overlay = styled.div`
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    background-color: rgba(0, 0, 0, 0.7);
    z-index: 9999;
    display: flex;
    flex-direction: column;
    justify-content: center;
`;

export default Overlay;
