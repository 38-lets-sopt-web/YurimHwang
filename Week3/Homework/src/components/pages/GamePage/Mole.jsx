import React from 'react';
import { Hole } from './Mole.style';

function Mole({ status, onClick }) {
  return (
    <Hole status={status} onClick={onClick}>
      {status === 'mole' && '👤'}
      {status === 'bomb' && '💣'}
      {status === 'hit' && '💥'}
    </Hole>
  );
}

export default Mole;