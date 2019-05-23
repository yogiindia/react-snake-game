import React from 'react';
import styled from 'styled-components';

const FancyButton = styled.button`
    margin: 0 auto;
    padding: 0px 20px;
    background-color: #fff;
    border: 2px solid #fff;
    font-size: 20px;
    font-family: 'Permanent Marker', cursive;
    cursor: pointer;
    outline: none;

    &:active {
        transform: scale(0.95);
    }
`;

export default FancyButton;
