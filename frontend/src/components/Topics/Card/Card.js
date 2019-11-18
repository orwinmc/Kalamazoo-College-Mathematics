import React, {Component} from 'react';

import './Card.css';

class Card extends Component {
  render() {
    var banner_image = null;

    if (this.props.image != null) {
      banner_image = require(`../../../assets/imgs/${this.props.image}`);
    }
    
    return (
      <div className="Card" >
        <div className="banner" style={{backgroundImage:`url(${banner_image})`}}>
        </div>
        <div className="caption">
          <h4 className="title">{this.props.name}</h4>
          <p className="summary">{this.props.summary}</p>
        </div>
        <div className="explore_wrapper">
          <button type="button" className="btn btn-primary explore_btn" onClick={() => { window.location.href=`./topics/${this.props.id}`}}>Explore</button>
        </div>
      </div>
    );
  }
}

export default Card;
