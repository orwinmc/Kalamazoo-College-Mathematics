import MathJax from 'react-mathjax2';

import React, {Component} from 'react';
import './MathEditor.css';

import Form from 'react-bootstrap/Form';

class MathEditor extends Component {
  constructor(props) {
    super(props)

    this.state = {
      latex : ""
    }
  }

  updateLatex(newLatex) {
    this.setState((state) => ({
      latex : newLatex
    }))
  }

  processLatex(latex) {
    let sections = [];
    let current = 0;

    while (current < latex.length) {
      //console.log(current);
      let blockStart = latex.indexOf("$$", current);
      let inlineStart = latex.indexOf("$", current);
      let blockEnd = latex.indexOf("$$", blockStart+2);
      let inlineEnd = latex.indexOf("$", inlineStart+1);

      if (blockStart >= 0 && blockEnd >= 0 && blockStart <= inlineStart) {
        const remaining = <span key={sections.length}>{latex.slice(current, blockStart)}</span>;
        sections.push(remaining);
        const block = <span className="MJXc-display" style={{textAlign:"center"}}><MathJax.Node key={sections.length}>{latex.slice(blockStart+2, blockEnd)}</MathJax.Node></span>;
        sections.push(block);
        current = blockEnd+2;
      } else if (inlineStart >= 0 && inlineEnd >= 0) {
        const remaining = <span key={sections.length}>{latex.slice(current, inlineStart)}</span>;
        sections.push(remaining);
        const inline = <MathJax.Node inline key={sections.length}>{latex.slice(inlineStart+1, inlineEnd)}</MathJax.Node>;
        sections.push(inline);
        current = inlineEnd+1;
      } else {
        const remaining = <span key={sections.length}>{latex.slice(current, latex.length)}</span>;
        sections.push(remaining);
        current = latex.length;
      }
    }

    console.log(sections);

    return sections;
  }

  render() {
    return (

      <div className="MathEditor">
        <Form.Control as="textarea" rows="3" value={this.state.latex} onChange={(e) => this.updateLatex(e.target.value)} />
        <br />
        <MathJax.Context input='tex'>
            <div>
              {this.processLatex(this.state.latex)}
            </div>
        </MathJax.Context>
      </div>

    )
  }
}



export default MathEditor;
