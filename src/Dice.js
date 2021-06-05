import React, { Component } from 'react'
import Die from './Die'
import './Dice.css'

class Dice extends Component {
    constructor(props) {
        super(props);
        this.state = { die1 : 'one', die2: 'one', rolling: false }
    }
    assignRoll = e => {
        const sideArray = ['one', 'two', 'three', 'four', 'five', 'six'];
        let rollDie1 = Math.floor(Math.random() * 6);
        let rollDie2 = Math.floor(Math.random() * 6);
        this.setState({ die1 : sideArray[rollDie1], die2: sideArray[rollDie2], rolling: true })
        // wait one second, then set rolling to false
        setTimeout(() => {
            this.setState({ rolling: false })
        }, 1000)
    }
    render() {
        return (
            <div className="Dice">
            <div className="Dice-container">
                    <Die
                        result={this.state.die1}
                        rolling={this.state.rolling}
                     />
                    <Die
                        result={this.state.die2}
                        rolling={this.state.rolling}
                     />
            </div>
            <button onClick={this.assignRoll} className="Dice-button" disabled={this.state.rolling}>
                {this.state.rolling ? "Rolling..." : "Roll Dice!"}
            </button>
            </div>
        )
    }
}

export default Dice;