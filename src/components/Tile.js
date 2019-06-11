import React from 'react';
import './Tile.css';

function Tile(props) {
  return (
    <div className='tile' onClick={props.onClick}>
      <img src={props.img} alt={props.id} />
    </div>
  )
}

export default Tile;
