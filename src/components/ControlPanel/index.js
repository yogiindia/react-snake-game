import React from 'react';
import styled from 'styled-components';
import Button from './Button';
import Timer from './Timer';
import Text from './Text';

const Container = styled.div`
    display: flex;
    flex: 1;
    width: 400px;
    flex-direction: row;
    justify-content: space-around;
    padding: 5px;
`;

function ControlPanel(props) {
    const { play, isGameOver, score, togglePlay } = props;

    return (
        <Container>
            <Timer pause={!play} reset={isGameOver}>
                {timer => <Text>time :- {timer}</Text>}
            </Timer>
            <Button onClick={togglePlay}>Play</Button>
            <Text>score :- {score}</Text>
        </Container>
    );
}

export default ControlPanel;
