import React, {Component} from 'react';
import axios from 'axios';
import './ShowCard.css'

class ShowCard extends Component {
    constructor(){
        super();
        this.state = {
            watched: false
        }
    }

    componentDidMount() {
        this.setState({
            watched: this.props.data.watched
        })
    }

    updateWatchStatus = (bool) => {
        const body = {
            watched: bool
        }
        axios.put(`/api/show/${this.props.data.id}`, body).then( response => {
            this.setState({
                watched: response.data.watched
            })
        })
    }

    render(){
        const { title, poster, summary, seasons, year} = this.props.data;
        return (
            <article className="show-card">
                <h4>{title}</h4>
                <img src={poster} alt={title}/>
                <p>{summary}</p>
                {this.state.watched ? (
                    <button onClick={() => this.updateWatchStatus(false)}>unwatched</button>
                ) : (
                    <button onClick={() => this.updateWatchStatus(true)}>watch</button>
                )}
            </article>
        )
    }
}

export default ShowCard;