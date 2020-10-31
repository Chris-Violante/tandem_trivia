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
      score: 0,
      userAnswer: null,
      qIndex: 9 
    }
  }

  getInitialState = () => {
    return {
      question: this.getQuestion(),
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


  scoreAnswer = (e) => {
    let scoreCopy = this.state.score
    let qIndexCopy = this.state.qIndex
    console.log(e)
    console.log(this.state.question)
    if((e === this.state.question.correct)&&(this.state.qIndex < 9)){
      this.setState({
        score: scoreCopy += 1,
        qIndex: qIndexCopy += 1,
        question: this.getQuestion()
      })
    }
    else if((e !== this.state.question.correct)&&(this.state.qIndex < 9)) {
      this.setState({
        score: scoreCopy -= 1,
        qIndex: qIndexCopy += 1,
        question: this.getQuestion()
      })
    }
    else if((e === this.state.question.correct)&&(this.state.qIndex === 9)) {
      this.setState({
        score: scoreCopy += 1
      })
      alert(`Game Over.  Final Score ${scoreCopy}`)
    }
    else if((e !== this.state.question.correct)&&(this.state.qIndex === 9)) {
      this.setState({
        score: scoreCopy -= 1
      })
      alert(`Game Over.  Final Score ${scoreCopy}`)
    }
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
            userAnswer={this.state.userAnswer}
            scoreAnswer={this.scoreAnswer}
            />
          }/>
        </Switch>
        </main>
      </div>
    )
  }
}

export default App;
