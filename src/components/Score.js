import React from 'react';
import styled from 'styled-components';

const Text = styled.h4`
    color: #fff;
    font-family: 'Permanent Marker', cursive;
    margin: 0;
    text-align: center;
`;

const BigText = styled.h3`
    text-align: center;
    margin-bottom: 0;
    font-size: 1.8em;
    margin-top: 2px;
    font-family: 'Permanent Marker', cursive;
    color: #fff;
`;

function Score(props) {
    return (
        <div>
            <Text>Score</Text>
            <BigText>{props.children}</BigText>
        </div>
    );
}

export default Score;
