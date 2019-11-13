import React, {Component} from 'react';
import SubtopicsCard from './SubtopicsCard/SubtopicsCard';
import './Subtopics.css';

class Subtopics extends Component {
  constructor(props) {
    super(props)

    this.state = {
      topic: {},
      subtopics: []
    }
  }

  async componentDidMount() {
    const topic_url = 'http://localhost:5000/topics/'+this.props.match.params.topic
    const topic_res = await fetch(topic_url, { credentials: 'include', method: 'GET' })
    const topic_data = await topic_res.json();

    this.setState({
      topic: topic_data
    })

    let subtopic_data_list = [];

    if (topic_data != null) {
      for (let i = 0; i<topic_data.subtopics.length; i++) {
        const subtopic_url = 'http://localhost:5000/subtopics/'+topic_data.subtopics[i];
        const subtopic_res = await fetch(subtopic_url, { credentials: 'include', method: 'GET' })
        const subtopic_data = await subtopic_res.json();
        subtopic_data_list.push(subtopic_data);
      }

      this.setState({
        subtopics: subtopic_data_list
      })
    }
  }

  render() {
    const subtopic_cards = this.state.subtopics.map((subtopics, index) => {
      return (
        <SubtopicsCard key={subtopics.id} id={subtopics.id} image={subtopics.image} name={subtopics.name} summary={subtopics.summary}/>
      );
    })

    return (
      <div className="Subtopics">
        <h1>{this.state.topic.name}</h1>
        {subtopic_cards}
      </div>
    );
  }
}

export default Subtopics;
