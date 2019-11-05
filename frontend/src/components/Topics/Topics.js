import React, {Component} from 'react';

import './Topics.css';
import Card from './Card/Card';

class Topics extends Component {
  constructor(props) {
    super(props);

    this.state = {
      topics: []
    }
  }

  async componentDidMount() {
    const all_topics_url = 'http://localhost:5000/topics';
    const all_topics_res = await fetch(all_topics_url, { credentials: 'include', method: 'GET' })
    const all_topics_data = await all_topics_res.json();

    this.setState({
      topics: all_topics_data
    })
  }

  render() {
    const topic_cards = this.state.topics.map((topic, index) => {
      


      return (
        <Card key={topic.id} image={topic.image} name={topic.name} summary={topic.summary}/>
      );
    })

    return (
      <div className="Topics">
        {topic_cards}
      </div>
    );
  }
}

export default Topics;
