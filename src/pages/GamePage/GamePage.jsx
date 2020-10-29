import React, { Component } from 'react';
import CurrentQuestion from '../../components/CurrentQuestion/CurrentQuestion'



class GamePage extends Component {
    render() {
        return(
            <div>
                <CurrentQuestion 
                    question={this.props.question}
                    score={this.props.score}
                />
            </div>
        )
    }
}

export default GamePage