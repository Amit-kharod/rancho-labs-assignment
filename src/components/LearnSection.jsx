import React from 'react';
import { GoBook } from 'react-icons/go';

export const LearnSection = () => {
  return (
    <section className="learn">
      <h2>
        <GoBook className="learn-icon" />
        Learn
      </h2>
      <ol>
        <li>
          Set the starting position: Drag and place the sprite ‘on the stage to
          set its initial position. Click and drag the sprite to position it
          where you want it to start.
        </li>
        <li>
          Add movement blocks: In the block palette on the left side of the
          screen, locate the “Motion” «category. You will find blocks like "Move
          10 steps,” "Turn 15 degrees” and "Goto x: [ ] y: [ ]""
        </li>
        <li>
          Use the "Go to x: [] y: []" block: Drag the “Go to x: [] y: [ ]" lock
          into the scripting area. Set the x andy values of the block to the
          coordinates of the target. position you want the sprite to move to.
          For ‘example, if you want the sprite to move to position (200,100),
          set the x value to 200 and the y value to 100.
        </li>
      </ol>
    </section>
  );
};
