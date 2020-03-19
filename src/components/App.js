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
      questions:[],
      searchCategory:"",
      searchType:"",
      searchDif:""
    }
    this.getQuestions = this.getQuestions.bind(this);
    this.handleSearchCategory = this.handleSearchCategory.bind(this);
    this.handleSearchType = this.handleSearchType.bind(this);
    this.handleSearchDif = this.handleSearchDif.bind(this);
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

  handleSearchCategory(data) {
    this.setState({
      searchCategory: data.value
    });
  }
  handleSearchType(data) {
    this.setState({
      searchType: data.value
    });
  }
  handleSearchDif(data) {
    this.setState({
      searchDif: data.value
    });
  }

  filterQuestions() {
    return this.state.questions

      .filter(question => {
        return question.category
          .toLowerCase()
          .includes(this.state.searchCategory.toLowerCase());
      })
      .filter(question => {
        return question.type
          .includes(this.state.searchType.toLowerCase());
      })
      .filter(question => {
        return question.difficulty
          .includes(this.state.searchDif.toLowerCase());
      })


  }
  render() {
    
    
    return (
      <div className="App">
      <Header/>
      <Filter 
      handleSearchCategory={this.handleSearchCategory} 
      searchCategory={this.state.searchCategory}
      handleSearchType={this.handleSearchType}
      searchType={this.state.searchType}
      handleSearchDif={this.handleSearchDif}
      searchDif={this.state.searchDif}
      />
      <Body questions={this.filterQuestions()}/>
      </div>
    );
  }
}

export default App;
