import React, { Component } from 'react'
import './Die.css'

class Die extends Component {
    render() {
        let dieIcon = `fas fa-dice-${this.props.result} fa-lg Die-icon`;
        return (
            <div className="Die-main">
                <i className={`${dieIcon} ${this.props.rolling ? 'shaking' : ''}`}></i>
            </div>
        )
    }
}

export default Die;