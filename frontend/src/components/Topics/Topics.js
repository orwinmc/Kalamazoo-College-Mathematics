import ReactDOM from 'react-dom';
import React, {Component} from 'react';

import './Topics.css';
import Card from './Card/Card';
import Form from 'react-bootstrap/Form';

class Topics extends Component {
  constructor(props) {
    super(props);
    this.cards = [];

    this.state = {
      topics: [],
      searchText: ""
    }

    this.searchChange = this.searchChange.bind(this);
  }

  async componentDidMount() {
    const all_topics_url = 'http://localhost:5000/topics';
    const all_topics_res = await fetch(all_topics_url, { credentials: 'include', method: 'GET' })
    const all_topics_data = await all_topics_res.json();

    this.setState({
      topics: all_topics_data
    })

    for (let i = 0; i<this.cards.length; i++) {
      var card = ReactDOM.findDOMNode(this.cards[i]);
      card.style.animationDelay = `${i/8.0}s`;
    }
  }

  searchChange(event) {
    this.setState({
      searchText: event.target.value
    })
  }

  render() {
    let topic_cards = this.state.topics.filter((topic, index) => {
      return topic.name.toLowerCase().includes(this.state.searchText.toLowerCase());
    });

    topic_cards = topic_cards.map((topic, index) => {
      return (
        <Card ref={(ref) => this.cards[index] = ref} key={topic.id} id={topic.id} image={topic.image} name={topic.name} summary={topic.summary}/>
      );
    })

    return (
      <div className="Topics">
        <h1>All Topics</h1>
        <br />
        <Form.Control size="lg" type="text" placeholder="Search for a Topic" onChange={this.searchChange}/>
        <br />
        {topic_cards}
      </div>
    );
  }
}

export default Topics;
