import React, {Component} from 'react';
import axios from 'axios';
import ShowCard from './components/ShowCard';
import AddShow from './components/AddShow';
import './App.css';


class App extends Component {
  constructor(){
    super()
    this.state = {
      shows: []
    }
  }

  componentDidMount(){
    this.getShows()
  }

  getShows = () => {
    axios.get('/api/shows/').then( response => {
      this.setState({
        shows: response.data.reverse()
      })
    })
  }

  render(){
    let tvShows = this.state.shows.map( element => <ShowCard data={element} key={element.id} />)
    return (
      <section>
        <AddShow getShows={this.getShows} />
        {tvShows}
      </section>
    )
  }
}

export default App;
