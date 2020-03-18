import React from 'react';
import apiQuestions from "../api/questions"
import Header from './Header';
import "../stylesheets/App.scss"

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
