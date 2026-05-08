import React from 'react';
import Mole from './Mole';
import { GridContainer } from './MoleGrid.style';

function MoleGrid({ moles, onMoleClick }) {
  return (
    <GridContainer>
      {moles.map((status, index) => (
        <Mole
          key={index}
          status={status}
          onClick={() => onMoleClick(index, status)}
        />
      ))}
    </GridContainer>
  );
}

export default MoleGrid;