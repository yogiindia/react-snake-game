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
    visibility: ${props => {
        if (props.hide) {
            return 'hidden';
        }

        return 'visible';
    }};
`;

function ControlPanel(props) {
    const { play, isGameOver, score, togglePlay } = props;

    return (
        <Container hide={isGameOver || !play}>
            <Timer pause={!play} reset={isGameOver}>
                {timer => <Text>time :- {timer}</Text>}
            </Timer>
            <Button onClick={togglePlay}>Pause</Button>
            <Text>score :- {score}</Text>
        </Container>
    );
}

export default ControlPanel;
