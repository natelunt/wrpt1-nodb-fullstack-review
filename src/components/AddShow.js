import React, {Component} from 'react';
import axios from 'axios'

class AddShow extends Component{
    constructor(){
        super();
        this.state = {

        }
    }

    handleChange = (e) => {
        this.setState({
            [e.target.name] : e.target.value
            // computed property name/dynamic property : value
        })
    }

    addShow = () => {
        const { title, year, summary, poster, streamingService } = this.state;
        const body = {
            title,
            year,
            summary,
            poster,
            streamingService, 
            watched: this.state.watched === 'on' ? true : false
        }

        axios.post('/api/shows', body).then(() => this.props.getShows())
    }

    render(){
        return(
            <section style={{ display: 'flex', flexDirection: 'column'}}>
                <input name="title" placeholder="title" onChange={(e) => this.handleChange(e)} />
                <input name="year" placeholder="year" onChange={(e) => this.handleChange(e)} />
                <input name="summary" placeholder="summary" onChange={(e) => this.handleChange(e)} />
                <input name="poster" placeholder="poster" onChange={(e) => this.handleChange(e)} />
                <input name="streamingService" placeholder="Streaming Service" onChange={(e) => this.handleChange(e)} />
                <input name="seasons" placeholder="seasons" onChange={(e) => this.handleChange(e)} />
                <p>Watched</p>
                <input name="watched" placeholder="watched" onChange={(e) => this.handleChange(e)}  type="checkbox"/>
                <button onClick={this.addShow}>add show</button>
            </section>
        )
    }
}

export default AddShow;