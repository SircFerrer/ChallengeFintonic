import React from 'react';
import apiQuestions from "../api/questions"
import Header from './Header';
import "../stylesheets/App.scss"

import Body from './Body';

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
    console.log(this.state.questions);
    
    return (
      <div className="App">
      <Header/>
      <Body questions={this.state.questions}/>
      </div>
    );
  }
}

export default App;
