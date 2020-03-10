import React from 'react';
import Grocery from './grocery'

// const List = (props, inCartClick) => (
//   <div>
//     <h2>{props.name}</h2>
//     <ul>

//       { props.items.map( item => <li key={item.id} inCartClick={inCartClick}>{item.name}</li>)}
//     </ul>
//   </div>
// );

const List = ({ items, name, inCartClick }) => (

  <div>
    {items.map(item => <Grocery key={item.id} {...item} inCartClick={inCartClick}
    />)}
  </div>

)


export default List;  