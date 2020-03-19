import React from 'react';
import apiQuestions from "../api/questions"
import Header from './Header';
import "../stylesheets/App.scss"
import Body from './Body';
import Filter from './Filter';



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
    apiQuestions().then(data => {
      const finalData = data.results.map((item, index) => {
        return { ...item, id: index };
      });
      this.setState({
        questions: finalData
      });
    });
  }

 
  render() {
    
    
    return (
      <div className="App">
      <Header/>
      <Filter/>
      <Body questions={this.state.questions}/>
      </div>
    );
  }
}

export default App;
