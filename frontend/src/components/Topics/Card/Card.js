import React from 'react';

import './Card.css';
import Button from 'react-bootstrap/Button';

const Card = (props) => {
  var banner_image = null;

  if (props.image != null) {
    banner_image = require(`../../../assets/imgs/${props.image}`);
  }

  return (
    <div className="Card">
      <div className="banner" style={{backgroundImage:`url(${banner_image})`}}>
      </div>
      <div className="caption">
        <h4 className="title">{props.name}</h4>
        <p className="summary">{props.summary}</p>
      </div>
      <div className="explore_wrapper">
        <button type="button" className="btn btn-primary explore_btn" onClick={() => { window.location.href=`./topics/${props.id}`}}>Explore</button> 
      </div>
    </div>
  );
}

export default Card;
