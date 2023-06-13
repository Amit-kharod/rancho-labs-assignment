import React, { useState } from 'react';
import { RobotGrid } from './Build/RobotGrid';
import { LogicPanel } from './Build/LogicPanel';
import { GiPuzzle } from 'react-icons/gi';

export const BuildSection = () => {
  const [actionSequence, setActionSequence] = useState([]);

  const handlePlayButton = (sequence) => {
    setActionSequence(
      sequence.map((action) => {
        return action.actionName;
      })
    );
  };

  return (
    <section className="build">
      <h2>
        <GiPuzzle className="icon" />
        Build
      </h2>
      <RobotGrid actionSequence={actionSequence} />
      <LogicPanel handlePlayButton={handlePlayButton} />
    </section>
  );
};
