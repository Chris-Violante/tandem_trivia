import './App.css';
import React, { Component } from 'react'
import Questions from '../../components/Questions/Apprentice_TandemFor400_Data.json'

console.log(Questions);

class App extends Component {
  render() {
    return(
      <div>
        <header>TANDEM TRIVIA</header>
      </div>
    )
  }
}

export default App;
