import React, { Component } from 'react';
import Card from './components/Card';
import Wrapper from './components/Wrapper';
import Title from './components/Title';

import toons from './toons.json';

class App extends Component {
    state = {
        toons
    };

    clickCard = keyId => {
        // this is what happens when a card is clicked
        // we want it to check if keyId has already been clicked
        // if not increase counter and reSort
        // if exists, they lose
    };

    render() {
        return (
            <Wrapper>
                <Title>Looney Clicks</Title>
                {this.state.toons.map(toon => (
                    <Card
                        clickCard={this.clickCard}
                        key={toon.key}
                        image={toon.image}
                        name={toon.name}
                        sortid={toon.sortId}
                        clicked={toon.clicked}
                    />
                ))}
            </Wrapper>
        )
    }
}

export default App;