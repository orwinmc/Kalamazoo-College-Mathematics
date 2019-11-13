import React from 'react';
import Media from 'react-media';

//import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHome } from '@fortawesome/free-solid-svg-icons'
import { faFilter } from '@fortawesome/free-solid-svg-icons'
import { faChalkboardTeacher } from '@fortawesome/free-solid-svg-icons'
import { faCalendarAlt } from '@fortawesome/free-solid-svg-icons'
import { faIdCard } from '@fortawesome/free-solid-svg-icons'

//import { faCaretUp } from '@fortawesome/free-solid-svg-icons'

import './SideNav.css';

import SidePrimary from './SidePrimary/SidePrimary.js'
//import SideLink from './SideLink/SideLink.js'

const options = {
  home:
    [
      {text:"Calendar", url:"/home"},
    ],
  profile:
    [
      {text:"Calendar", url:"/profile"},
    ],
  topics:
    [
      {text:"Topics", url:"/topics"},
    ],
  professors:
    [
      {text:"Professors", url:'/professors'},
      {text:"Dr. Intermont", url:"http://people.kzoo.edu/~intermon/"},
      {text:"Dr. Barth", url:"http://people.kzoo.edu/barth/"},
      {text:"Dr. Oloo", url:"http://people.kzoo.edu/soloo/"},
      {text:"Dr. Nordmoe", url:"http://people.kzoo.edu/enordmoe/"}
    ],
  calendar:
    [
      {text:"Calendar", url:"/calendar"},
    ]
}

const SideNav = () => {
  return (
    <Media queries={{ small: { maxWidth: "780px" } }}>
      {matches =>
        matches.small ? (
          <nav className="SideNav">
            <SidePrimary hidden="true" options={options.home}><FontAwesomeIcon icon={faHome} /></SidePrimary>
            <SidePrimary hidden="true" options={options.profile}><FontAwesomeIcon icon={faIdCard} /></SidePrimary>
            <SidePrimary hidden="true" options={options.topics.slice(0,1)}><FontAwesomeIcon icon={faFilter} /></SidePrimary>
            <SidePrimary hidden="true" options={options.professors.slice(0,1)}><FontAwesomeIcon icon={faChalkboardTeacher} /></SidePrimary>
            <SidePrimary hidden="true" options={options.calendar}><FontAwesomeIcon icon={faCalendarAlt} /></SidePrimary>
          </nav>
        ) : (
          <nav className="SideNav">
            <SidePrimary hidden="true" options={options.home}><FontAwesomeIcon icon={faHome} /> Home</SidePrimary>
            <SidePrimary hidden="true" options={options.profile}><FontAwesomeIcon icon={faIdCard} /> Profile</SidePrimary>
            <SidePrimary hidden="true" options={options.topics}><FontAwesomeIcon icon={faFilter} /> Topics</SidePrimary>
            <SidePrimary hidden="true" options={options.professors}><FontAwesomeIcon icon={faChalkboardTeacher} /> Professors</SidePrimary>
            <SidePrimary hidden="true" options={options.calendar}><FontAwesomeIcon icon={faCalendarAlt} /> Calendar</SidePrimary>
          </nav>
        )
      }
    </Media>
  );
}

export default SideNav;
