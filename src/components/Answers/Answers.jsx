import React, { Component } from 'react'



class Answers extends Component {    
    render() {
        return(
            <>
            {this.props.question.incorrect.map((key, idx) => {
                    return(
                        <button 
                        key={idx}
                        onClick={(e) => this.props.scoreAnswer(e.target.innerText)}
                        >{this.props.question.incorrect[idx]}</button>
                        )
            })}
            </>                
    )
}
}


export default Answers