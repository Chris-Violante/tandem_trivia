import React, { Component } from 'react'



class CorrectAnswer extends Component {    
        render() {
            return(
                <>
                <button
                onClick={(e) => this.props.scoreAnswer(e.target.innerText)}
                >{this.props.questions.correct}</button>
                </>
               
        )
    }
}


export default CorrectAnswer