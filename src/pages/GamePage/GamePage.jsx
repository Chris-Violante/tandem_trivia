import React, { Component } from 'react';
import CurrentQuestion from '../../components/CurrentQuestion/CurrentQuestion'
import Answers from '../../components/Answers/Answers'
import Score from '../../components/Score/Score'
import CorrectAnswer from '../../components/CorrectAnswer/CorrectAnswer';



class GamePage extends Component {    
    render() {
        return(
            <>
            <div>
                <div>
                    <Score 
                        score={this.props.score}
                    />
                </div>
                <div>
                    <CurrentQuestion 
                        question={this.props.question}
                    />
                </div>
                <div>
                    <Answers 
                        question={this.props.question}
                        scoreAnswer={this.props.scoreAnswer}
                        />
                    <CorrectAnswer 
                        questions={this.props.question}
                        scoreAnswer={this.props.scoreAnswer}
                        />
                </div>
            </div>
            </>
        )
    }
}

export default GamePage