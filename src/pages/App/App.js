import './App.css';
import React, { Component } from 'react'
import QuestionsData from '../../components/QuestionsData/Apprentice_TandemFor400_Data.json'
import NewGameButton from '../../components/NewGameButton/NewGameButton';
import Welcome from '../../components/Welcome/Welcome';

console.log(QuestionsData);

class App extends Component {
  render() {
    return(
      <div className="App">
        <header className="header-footer">TANDEM TRIVIA</header>
        <Welcome />
        <NewGameButton />
      </div>
    )
  }
}

export default App;
