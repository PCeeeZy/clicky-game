import React, { Component } from 'react';
import Card from './components/Card';
import Wrapper from './components/Wrapper';
import Title from './components/Title';

import toons from './toons.json';

class App extends Component {
    state = {
        toons: toons,
        score: 0,
        highScore: 0
    }

    generateRandomToons = toons => {
        const length = toons.length;
        let temp = [];
        for(let i =0 ;i<length;i++){
            let justJunk = toons.splice(Math.floor(Math.random() * length,1));
            temp.push(justJunk[0]);
        }
        toons = temp;
        return toons;

    }

    clickCard = (clicked, id) => {
        let clickToons = this.state.toons;
        // check if clicked is t/f
        if (clicked) {
            // if true we check high score and lose and reset game
            this.setState(
                { 
                    toons: toons,
                    score: 0
                })
            console.log(`this has been clicked bud`);
        }
        // else
        else {

            clickToons[id].clicked = true;
            let name = clickToons[id].name;
            let newScore = this.state.score+1;
            let newHigh = this.state.highScore+1;

            //  set clicked to true
            console.log(`${name} has now been clicked. ${clickToons[id].clicked}`);
            this.setState(
                { 
                    toons: clickToons,
                    // add 1 to score
                    score: newScore,
                    highScore: newHigh

                })
            console.log(`Score: ${newScore}`);
            console.log(`HighScore: ${newHigh}`)
            // randomize order of toons
        }
            


    //    let toons = this.generateRandomToons(toon);
    //    this.setState({toons: toons})
    };

    render() {
        return (
            <Wrapper>
                <Title>Looney Clicks</Title>
                {this.state.toons.map(toon => (
                    <Card
                        clickCard={this.clickCard}
                        image={toon.image}
                        name={toon.name}
                        sortid={toon.sortId}
                        clicked={toon.clicked}
                        // toons = {this.state.toons}
                    />
                ))}
            </Wrapper>
        )
    }
}

export default App;