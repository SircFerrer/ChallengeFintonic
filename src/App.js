import React from 'react';
import apiQuestions from "./api/questions"
import './App.css';
import Header from './components/Header';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state={
      questions:[]
    }
  }
  componentDidMount() {
    apiQuestions().then(questions => this.setState({ questions }));
  }

  render() {
    console.log(this.state);
    
    return (
      <div className="App">
      <Header/>
      </div>
    );
  }
}

export default App;
