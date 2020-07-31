import React, { Component } from 'react';
import './App.css';
import Quote from './components/Quote';
import { random } from 'lodash';

class App extends Component{
  constructor(props){
    super(props);
    this.state= {
      quotes: [],
      selectedQuoteIndex:null,
    }
    this.assignNewQuote=this.assignNewQuote.bind(this);
    this.selectedQuoteIndex=this.selectedQuoteIndex.bind(this);
  }

  componentDidMount(){
    fetch('https://gist.githubusercontent.com/natebass/b0a548425a73bdf8ea5c618149fe1fce/raw/f4231cd5961f026264bb6bb3a6c41671b044f1f4/quotes.json')
    .then(data=> data.json())
    .then(quotes => this.setState({ quotes}, this.assignNewQuote));
  }

get selectedQuote() {
  if(!this.state.quotes.length || !Number.isInteger(this.state.selectedQuoteIndex)){
    return undefined;
  }
  return this.state.quotes[this.state.selectedQuoteIndex];
}

 selectedQuoteIndex() {
   if(!this.state.quotes.length){
     return undefined;
   }
   return random(0, this.state.quotes.length -1);
 }

 assignNewQuote(){
  this.setState({selectedQuoteIndex: this.selectedQuoteIndex() });
 }

  render(){
  return (
    <div className="App">
      <Quote selectedQuote={this.selectedQuote} assignNewQuote={this.assignNewQuote} />
    </div>
  );
  }
}

export default App;
