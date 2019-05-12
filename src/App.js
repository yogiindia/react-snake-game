import React from 'react';

import Grid from './components/Grid';
import Header from './components/Header';
import Text from './components/Text';
import Button from './components/Button';

import './App.css';

const GRID_SIZE = 35;

function App() {
    return (
        <div className="app">
            <Header>Snake Game</Header>
            <div className="container">
                <div className="control-panel">
                    <Text>time : 00</Text>
                    <Button>Play</Button>
                    <Text>score: 00</Text>
                </div>
                <Grid size={GRID_SIZE} />
            </div>
        </div>
    );
}

export default App;
