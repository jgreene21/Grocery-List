import React from 'react';

const Grocery = ({ id, name, inCart, inCartClick }) => (
  <li
    style={ inCart ? { ...styles.Grocery, ...styles.inCart, } : styles.Grocery }
    onClick={ () => inCartClick(id)}
  >
   { name }
  </li>
);

const styles = {
  Grocery: { cursor: 'pointer' },
  inCart: { color: 'grey', textDecoration: 'line-through' },
};

export default Grocery;