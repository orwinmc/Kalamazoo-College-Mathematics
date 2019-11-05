import React from 'react';
import HeadNav from '../Layout/HeadNav/HeadNav';

import './Home.css';

const Home = () => {
  return (
    <div className="Home">
      <HeadNav />
      <div id="headline">
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <h1>Kalamazoo College Mathematics</h1>
        <h5 id="quote">The beauty of mathematics only shows itself to more patient followers.</h5>
        <h6 id="author"> - Maryam Mirzakhani</h6>
      </div>
    </div>
  );
}

export default Home;
