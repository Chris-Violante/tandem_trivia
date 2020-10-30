import './App.css';
import React, { Component } from 'react'
import QuestionsData from '../../components/QuestionsData/Apprentice_TandemFor400_Data.json'
import { Route, Switch } from 'react-router-dom';
import GamePage from '../GamePage/GamePage'
import HomePage from '../HomePage/HomePage'


const questions = QuestionsData


class App extends Component {
  constructor() {
    super()
    this.state = {
      ...this.getInitialState(),
      score: 0
    }
  }

  getInitialState = () => {
    return {
      question: this.getQuestion()
    }
  }
  

  getQuestion = () => {
    let randomNum = this.getRandomInt(0, 20)
    let question = questions[randomNum]
    questions.splice(randomNum, 1)
    return question
  }

  getRandomInt = (min, max) => {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1) + min); 
  }


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
            <GamePage 
            question={this.state.question}
            score={this.state.score}
            />
          }/>
        </Switch>
        </main>
      </div>
    )
  }
}

export default App;
