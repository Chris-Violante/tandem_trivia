import React, { Component } from 'react';
import CurrentQuestion from '../../components/CurrentQuestion/CurrentQuestion'
import Answers from '../../components/Answers/Answers'



class GamePage extends Component {
    render() {
        return(
            <div>
                <div>
                    <CurrentQuestion 
                        question={this.props.question}
                        score={this.props.score}
                    />
                </div>
                <div>
                    <Answers 
                        question={this.props.question}
                    />
                </div>
            </div>
        )
    }
}

export default GamePage