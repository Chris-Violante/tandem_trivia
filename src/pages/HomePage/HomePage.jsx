import React, { Component } from 'react'
import { Link } from 'react-router-dom'; 



class HomePage extends Component{
    render() {
        return(
            <div>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nostrum, ullam. Aut a sequi dolorem exercitationem laboriosam atque, veniam provident ipsam, necessitatibus, repellat nulla commodi cumque dolorum eveniet sed ad perferendis?</p>
                <Link className='btn btn-default' to='/GamePage'>New Game</Link>
            </div>
        )
    }
}


export default HomePage