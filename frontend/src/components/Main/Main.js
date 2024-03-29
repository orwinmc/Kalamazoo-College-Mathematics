import React from 'react';
import HeadNav from '../Layout/HeadNav/HeadNav';
import Footer from '../Footer/Footer';
import './Main.css';

const Main = () => {
  return (
    <div className="Main">
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
      <Footer />
    </div>
  );
}

export default Main;
