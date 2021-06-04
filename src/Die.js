import React, { Component } from 'react'
import './Die.css'

class Die extends Component {
    render() {
        let dieIcon = `fas fa-dice-${this.props.result} fa-10x Die-icon`;
        return (
            <div className="Die-main">
                <i className={dieIcon}></i>
            </div>
        )
    }
}

export default Die;