import React, {Component} from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCaretRight } from '@fortawesome/free-solid-svg-icons'
import { faCaretDown } from '@fortawesome/free-solid-svg-icons'

import './SidePrimary.css';
import '../SideSecondary/SideSecondary.css'

import SideSecondary from '../SideSecondary/SideSecondary.js'


// --- PROPS: ---
// text: string
// icon: FontAwesomeIcon
// options: list with {option:"", url:""} objects

// --- STATE: ---
// hidden: boolean


class SidePrimary extends Component {
  constructor(props) {
    super(props);

    this.state = { hidden:true };
    this.switchDropdown = this.switchDropdown.bind(this);
    this.changeURL = this.changeURL.bind(this);
  }

  switchDropdown() {
    this.setState((state) => ({
      hidden:!state.hidden
    }));
  }

  changeURL() {
    console.log(this.props);
    window.location.pathname = this.props.options[0].url;
  }

  render() {
    let options = []
    if (!this.state.hidden) {
      options = this.props.options.map((option, index) => {
        if (index > 0) {
          return (
            <SideSecondary key={index} text={option.text} url={option.url} />
          )
        }
      });
    }

    let dropdown;
    if (this.props.options.length > 1) {
      dropdown = <button className="SidePrimary" onClick={this.switchDropdown}>{this.props.children}<FontAwesomeIcon icon={this.state.hidden ? faCaretRight : faCaretDown} style={{float:"right"}}/></button>;
    } else {
      dropdown = <button className="SidePrimary" onClick={this.changeURL}>{this.props.children}</button>;
    }


    return (
      <div>
        {dropdown}
        {options}
      </div>
    );
  }
}

export default SidePrimary;
