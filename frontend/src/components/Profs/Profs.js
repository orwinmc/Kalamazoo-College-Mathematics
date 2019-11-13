import React from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import './Profs.css'


const Profs = (props) => {
  return (
    <Card>
      <Card.Body>
        <Card.Text>
          <strong>Dr. Oloo</strong>
          <br></br>
          Classes: Calc I, Calc III <br></br>
          Office Hours for Fall 2019:
          M - Tu - W- Fri : 11:00-11:30am and
          M - W 3-4pm<br></br>
          <Button href={"http://people.kzoo.edu/soloo/"} variant="primary" style={{ margin: "0.5em" }}>Website</Button>
          <br></br>
          <strong>Dr. Intermont</strong>
          <br></br>
          Classes: FYS, Linear Algerba
          <br></br>
          Office Hours
          Monday: 10:45-11:45 am
          Tuesday: 1-2 pm
          Wednesday: 2:45-3:45 pm
          Friday: 9-10 am
          And by appointment
          <br></br>
          <Button href={"http://people.kzoo.edu/~intermon/"} variant="primary" style={{ margin: "0.5em" }}>Website</Button>
          <br></br>
          <strong>Dr. Barth</strong>
          <br></br>
          Classes: Calc III, Quantitative Reasoning
          <br></br>
          Office Hours:MWF:   8:30-9:30am, 11-noon, 1:30-2:30pm,T-Th 8:30-11:30am, many other unscheduled times
          <br></br>
          <Button href={"http://people.kzoo.edu/barth/"} variant="primary" style={{ margin: "0.5em" }}>Website</Button>
          <br></br>
          <strong>Dr. Nordome</strong>
          <br></br>
          Classes: Calc II, Applied Statistics I 
          <br></br>
          Office Hours: MW 9:45-10:45 am,  Th 1-3pm or by appointment or serendipity
          <br></br>
          <Button href={"http://people.kzoo.edu/enordmoe/"} variant="primary" style={{ margin: "0.5em" }}>Website</Button>
            </Card.Text>
           
      </Card.Body>
    </Card>

    
      );
 
}

export default Profs
