import React from 'react';

import './ContentRegion.css'

const ContentRegion = (props) => {
  return (
    <div className="ContentRegion">
      {props.children}
    </div>
  );
}

export default ContentRegion;
