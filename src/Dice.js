import React, { Component } from 'react'
import Die from './Die'
import './Dice.css'

class Dice extends Component {
    constructor(props) {
        super(props);
        this.state = { die1 : 'one', die2: 'one' }
    }
    assignRoll = e => {
        const jankArray = ['one', 'two', 'three', 'four', 'five', 'six'];
        let rollDie1 = Math.floor(Math.random() * 6);
        let rollDie2 = Math.floor(Math.random() * 6);
        this.setState({ die1 : jankArray[rollDie1], die2: jankArray[rollDie2] })
    }
    render() {
        return (
            <div>
            <div className="Dice-main">
                <div className="Dice-die">
                    <Die
                        result={this.state.die1}
                     />
                </div>
                <div className="Dice-die">
                    <Die
                        result={this.state.die2}
                     />
                </div>
            </div>
            <div>
                <button onClick={this.assignRoll} className="Dice-button">Roll the Dice</button>
            </div>
            </div>
        )
    }
}

export default Dice;