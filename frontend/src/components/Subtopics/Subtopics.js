import React, {Component} from 'react';
import SubtopicsCard from './SubtopicsCard/SubtopicsCard';
import Button from 'react-bootstrap/Button';
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



  // render() {
  //   const subtopic_cards = this.state.subtopics.map((subtopic, index) => {
  //   return (
  //       <SubtopicsCard className="hoveraction" key={subtopic.id} style={{ float:'left', width: '22rem', margin:'1em'}}>
  //         <SubtopicsCard.Body>
  //
  //           <SubtopicsCard.Title>{subtopic.id}</SubtopicsCard.Title>
  //           <SubtopicsCard.Title>{subtopic.name}</SubtopicsCard.Title>
  //           <SubtopicsCard.Text>
  //             {subtopic.summary}
  //           </SubtopicsCard.Text>
  //           <Button href={"http://localhost:3000/topics/" + this.props.match.params.topic + "/" + subtopic.id + "/resources"} variant="primary" style={{ margin:"0.5em" }}>Resources</Button>
  //           <Button variant="primary" style={{ margin:"0.5em" }}>Problems</Button>
  //
  //         </SubtopicsCard.Body>
  //       </SubtopicsCard>
  //     );
  //   }
    // const subtopic_cards = this.state.subtopics.map((subtopic, index) => {
    //   return (
    //     <div className="hoveraction" key={subtopic.id} style={{ float:'left', width: '22rem', margin:'1em'}}>
    //     <h4>{subtopic.id}</h4>
    //     <h4>{subtopic.name}</h4>
    //     <p>
    //     {subtopic.summary}
    //     </p>
    //     <Button href={"http://localhost:3000/topics/" + this.props.match.params.topic + "/" + subtopic.id + "/resources"} variant="primary" style={{ margin:"0.5em" }}>Resources</Button>
    //     <Button variant="primary" style={{ margin:"0.5em" }}>Problems</Button>
    //     <br />
    //     </div>
    //   );
    // }
    //}



// return (
//   <div className="Card">
//     <div className="banner" style={{backgroundImage:`url(${banner_image})`}}>
//     </div>
//     <div className="caption">
//       <h4 className="title">{props.name}</h4>
//       <p className="summary">{props.summary}</p>
//     </div>
//     <div className="explore_wrapper">
//       <button type="button" className="btn btn-primary explore_btn" onClick={() => { window.location.href=`./topics/${props.id}`}}>Explore</button>
//     </div>
//   </div>
// );

//     return (
//       <div className="Subtopics">
//         <h1>{this.state.topic.name}</h1>
//         {subtopic_cards}
//       </div>
//     );
//   }
// }
    return (
        <div className="Subtopics">
          <h1>{this.state.topic.name}</h1>
            {subtopic_cards}
          </div>
          );
        }
      }
export default Subtopics;
