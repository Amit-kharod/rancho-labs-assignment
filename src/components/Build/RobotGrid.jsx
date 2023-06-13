import React, { useEffect, useState } from 'react';

const gridRows = [0, 1, 2, 3, 4];

export const RobotGrid = ({ actionSequence }) => {
  const [currentPosition, setCurrentPosition] = useState({
    x: 0,
    y: 0,
  });

  const [robotStyle, setRobotStyle] = useState({
    top: `${currentPosition.x * 101.5 + 10}%`,
    left: `${currentPosition.y * 101 + 10}%`,
  });

  const [instructions, setInstructions] = useState([]);

  useEffect(() => {
    setCurrentPosition({
      x: 0,
      y: 0,
    });
    getRobotPath();
  }, [actionSequence]);


  const moveRobot = (position, actions) => {
    setCurrentPosition(position);
    setRobotStyle({
      top: `${position.x * 101.5 + 10}%`,
      left: `${position.y * 101 + 10}%`,
    });
    setInstructions(actions);
  };

  const getRobotPath = () => {
    let [x, y] = [0, 0];
    const path = [[0, 0]];
    const instructionsSequence = [];

    actionSequence.map((action, i) => {
      switch (action) {
        case 'down':
          if (path.slice(-1)[0][0] >= 4) {
            break;
          }
          path.push([x + 1, y]);
          instructionsSequence.push('down');
          x++;
          break;
        case 'left':
          if (path.slice(-1)[0][1] <= 0) {
            break;
          }
          path.push([x, y - 1]);
          instructionsSequence.push('left');
          y--;
          break;
        case 'right':
          if (path.slice(-1)[0][1] >= 4) {
            break;
          }
          path.push([x, y + 1]);
          instructionsSequence.push('right');

          y++;
          break;
        default:
        case 'up':
          if (path.slice(-1)[0][0] <= 0) {
            break;
          }
          path.push([x - 1, y]);
          instructionsSequence.push('up');
          x--;
          break;
      }
    });
    path.forEach((path, i) => {
      setTimeout(() => {
        moveRobot({ x: path[0], y: path[1] }, instructionsSequence.slice(0, i));
      }, 1000 * i);
    });
  };

  return (
    <>
      <div className="robot-grid">
        {gridRows.map((row, i) => {
          return gridRows.map((col, j) => {
            {
              if (i == 0 && j == 0)
                return (
                  <div key={`${i}-${j}`} className={`grid-cell cell${i}-${j}`}>
                    <img
                      className="robot"
                      style={robotStyle}
                      src="./imgs/robot.png"
                    ></img>{' '}
                  </div>
                );
            }
            return (
              <div
                key={`${i}-${j}`}
                className={`grid-cell cell${i}-${j}`}
              ></div>
            );
          });
        })}
      </div>
      <div className="instructions">
        <h2>Instructions Implemented</h2>
        <ul>
          {instructions.map((instruction, i) => {
            return <li key={i}>Robot move {instruction}</li>;
          })}
          {currentPosition.x === 4 && currentPosition.y === 4 && (
            <li className="final-instruction">
              ...Robot reached the destination
            </li>
          )}
        </ul>
      </div>
    </>
  );
};
