import './App.css';
import React, { Component } from 'react'
import QuestionsData from '../../components/QuestionsData/Apprentice_TandemFor400_Data.json'
import NewGameButton from '../../components/NewGameButton/NewGameButton';
import Welcome from '../../components/Welcome/Welcome';
import { Route, Link, Switch } from 'react-router-dom';
import GamePage from '../GamePage/GamePage'



console.log(QuestionsData);

class App extends Component {
  render() {
    return(
      <div className="App">
        <header className="header-footer">TANDEM TRIVIA</header>
        <main>
        <Switch>
        <Welcome />
        <Link className='btn btn-default' to='/GamePage'>New Game</Link>
        <Route exact path='/GamePage' className='btn btn-default' render={({ history }) => 
          <GamePage />
        }/>
        </Switch>
        </main>
      </div>
    )
  }
}

export default App;
