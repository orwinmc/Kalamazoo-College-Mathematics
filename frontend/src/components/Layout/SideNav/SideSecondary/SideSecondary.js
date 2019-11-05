import React from 'react';

import './SideSecondary.css'


// --- PROPS: ---
// text: string
// url: string

const SideSecondary = (props) => {
  return (
    <a className="SideSecondary" href={props.url}>{props.text}</a>
  )
}

export default SideSecondary;
