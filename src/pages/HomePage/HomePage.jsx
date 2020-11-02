import React, { Component } from 'react'
import { Link } from 'react-router-dom'; 



class HomePage extends Component{
    render() {
        return(
            <div>
                <p>Tandem Trivia is a quick to play, fun game that was built using the 2020 Tandem Internship code challenge guidelines. The questions are scored jeopardy style meaning if you are wrong you lose a point and right gains a point.
                </p><br></br>

                <p>There are A LOT of trivia application tutorials on the internet as it is one of the relatively more basic things someone new to coding can build and have fun with. For this application I made a firm point to not use any code, any concepts, or even consult any of these walk throughs while building this game. All of the algorithms for question selection, question scoring, and gameplay were of my own design.
                </p><br></br>

                <p>This doesn't mean Tandem Trivia is the best trivia game out there, it means quite the opposite. The game is not perfect but the game did come from my own mind and I believe shows some of what I am capable of at this point in time.
                </p><br></br>

                <p>Press 'New Game' to start a 10 questions round of Trivia!<br></br>
                </p>
                <Link className='btn btn-default' to='/GamePage'>New Game</Link>
            </div>
        )
    }
}


export default HomePage