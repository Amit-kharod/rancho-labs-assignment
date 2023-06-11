import React from 'react';
import { RobotGrid } from './Build/RobotGrid';
import { Instructions } from './Build/Instructions';
import { LogicPanel } from './Build/LogicPanel';
import { GiPuzzle } from 'react-icons/gi';

export const BuildSection = () => {
  return (
    <section className="build">
      <h2>
        <GiPuzzle />
        Build
      </h2>
      <RobotGrid />
      <Instructions />
      <LogicPanel />
    </section>
  );
};
