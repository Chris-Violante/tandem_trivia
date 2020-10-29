import './App.css';
import React, { Component } from 'react'
import QuestionsData from '../../components/QuestionsData/Apprentice_TandemFor400_Data.json'
import { Route, Switch } from 'react-router-dom';
import GamePage from '../GamePage/GamePage'
import HomePage from '../HomePage/HomePage'



console.log(QuestionsData);

class App extends Component {
  render() {
    return(
      <div className="App">
        <header className="header-footer">TANDEM TRIVIA</header>
        <main>
        <Switch>
          <Route exact path='/' render={({ history }) => 
            <HomePage />
          }/>
          <Route exact path='/GamePage' render={({ history }) => 
            <GamePage />
          }/>
        </Switch>
        </main>
      </div>
    )
  }
}

export default App;
