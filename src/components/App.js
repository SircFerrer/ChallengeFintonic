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
    this.getQuestions = this.getQuestions.bind(this);
  }
  componentDidMount() {
    this.getQuestions();
  }
  getQuestions() {
    apiQuestions().then(questionsData => {
      const finalData = questionsData.map((item, index) => {
        return { ...item, id: index };
      });
      this.setState({
        questions: finalData
      });
    });
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
