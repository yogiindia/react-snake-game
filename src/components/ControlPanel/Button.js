import React from 'react';
import styled from 'styled-components';

const Button = styled.button`
    margin: 0;
    background-color: transparent;
    padding: 1px 10px;
    cursor: pointer;
    outline: none;
    border: 0;
    color: #ecf0f1;
    font-size: 1.2rem;
    font-family: 'Permanent Marker', cursive;

    &:active {
        font-size: 1.3rem;
    }
`;

export default Button;
