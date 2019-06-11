import React from 'react';
import './Tile.css';

function Tile(props) {
  return (
    <div
    className='tile'
    onClick={() => props.handleClick(props.id)}
    >
      <img src={props.img} alt={props.id} />
    </div>
  )
}

export default Tile;
