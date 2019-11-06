import React, {Component} from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

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
    const subtopic_cards = this.state.subtopics.map((subtopic, index) => {
      return (
        <Card className="hoveraction" key={subtopic.id} style={{ float:'left', width: '22rem', margin:'1em'}}>
          <Card.Body>
            <Card.Title>{subtopic.id}</Card.Title>
            <Card.Title>{subtopic.name}</Card.Title>
            <Card.Text>
              {subtopic.summary}
            </Card.Text>
            <Button href={"http://localhost:3000/topics/" + this.props.match.params.topic + "/" + subtopic.id + "/resources"} variant="primary" style={{ margin:"0.5em" }}>Resources</Button>
            <Button variant="primary" style={{ margin:"0.5em" }}>Problems</Button>
          </Card.Body>
        </Card>
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
