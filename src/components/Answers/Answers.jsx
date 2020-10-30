import React, { Component } from 'react'



class Answers extends Component {    
        render() {
            return(
                <div>
                    <button>{this.props.question.correct}</button>
                    <button>{this.props.question.incorrect[0]}</button>
                    <button>{this.props.question.incorrect[1]}</button>
                    <button>{this.props.question.incorrect[2]}</button>
                </div>
                
        )
    }
}


export default Answers