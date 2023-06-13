import React, { useState } from 'react';
import { RobotGrid } from './Build/RobotGrid';
import { Instructions } from './Build/Instructions';
import { LogicPanel } from './Build/LogicPanel';
import { GiPuzzle } from 'react-icons/gi';

export const BuildSection = () => {
  const [actionSequence, setActionSequence] = useState([]);

  const handlePlayButton = (sequence) => {
    console.log('play')
    console.log(sequence)
    setActionSequence(sequence.map(action => {
      return action.actionName;
    }))
  }

  console.log(actionSequence)

  return (
    <section className="build">
      <h2>
        <GiPuzzle />
        Build
      </h2>
      <RobotGrid actionSequence={actionSequence}/>
      <Instructions />
      <LogicPanel handlePlayButton={handlePlayButton} />
    </section>
  );
};
