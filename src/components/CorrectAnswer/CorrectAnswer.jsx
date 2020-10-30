import React, { Component } from 'react'



class CorrectAnswer extends Component {    
        render() {
            return(
                <>
                <button>{this.props.questions.correct}</button>
                </>
               
        )
    }
}


export default CorrectAnswer