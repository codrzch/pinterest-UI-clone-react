import React from 'react';
import PropTypes from 'prop-types';
import ReactDOM from 'react-dom';
import './index.css';

const PinterestCard = ({ card: { title, pins, mainImg, subImg1, subImg2 } }) => (
  <div className="card">
    <div className="images">
      <img className="main" alt={title} src={mainImg} />
      <img className="sub1" alt="preview 1" src={subImg1} />
      <img className="sub2" alt="preview 2" src={subImg2} />
    </div>
    <div className="summary">
      <h3 className="title">{title}</h3>
      <div className="pin-count">
        <strong>{pins}</strong> Pins
      </div>
    </div>
    <button className="follow-btn">Follow</button>
  </div>
);
PinterestCard.propTypes = {
  card: PropTypes.object.isRequired
};

const PinterestBoard = ({ cards }) => (
  <ul className="board">
    {cards.map(card =>
      <li key={card.id}>
        <PinterestCard card={card} />
      </li>
    )}
  </ul>
);
PinterestBoard.propTypes = {
  cards: PropTypes.array.isRequired
};

let cards = [{
  id: 1,
  title: "ReactJS",
  pins: 978,
  mainImg: require('./img/react1.jpg'),
  subImg1: require('./img/react2.jpg'),
  subImg2: require('./img/react3.jpg')
},
{
  id: 2,
  title: "Node.js",
  pins: 455,
  mainImg: require('./img/node1.jpg'),
  subImg1: require('./img/node2.jpg'),
  subImg2: require('./img/node3.jpg')
},
{
  id: 3,
  title: "AngularJS",
  pins: 767,
  mainImg: require('./img/angular1.jpg'),
  subImg1: require('./img/angular2.jpg'),
  subImg2: require('./img/angular3.jpg')
}];

ReactDOM.render(
  <PinterestBoard cards={cards} />, 
  document.querySelector('#root')
);
