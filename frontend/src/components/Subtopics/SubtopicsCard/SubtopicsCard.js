import React from 'react';

import './SubtopicsCard.css';
import Button from 'react-bootstrap/Button';

const SubtopicsCard = (props) => {
  var banner_image = null;

  if (props.image != null) {
    banner_image = require(`../../../assets/imgs/${props.image}`);
  }

  return (
    <div className="SubtopicsCard">
      <div className="caption">
        <h4 className="title">{props.name}</h4>
        <p className="summary">{props.summary}</p>
      </div>
      <div className="explore_wrapper">
        <button type="button" className="btn btn-primary explore_btn">Resources</button>
        <button type="button" className="btn btn-primary explore_btn">Problems</button>
      </div>
    </div>
  );
}

export default SubtopicsCard;
