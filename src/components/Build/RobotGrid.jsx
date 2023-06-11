import React, { useEffect, useState } from 'react';

const gridRows = [0, 1, 2, 3, 4];
const actionSequence = [
  'down',
  'down',
  'down',
  'down',
  'right',
  'right',
  'right',
  'right',
];

export const RobotGrid = () => {
  const [currentPosition, setCurrentPosition] = useState({
    x: 0,
    y: 0,
  });
  const [robotPath, setRobotPath] = useState([]);

  const [robotStyle, setRobotStyle] = useState({
    top: `${currentPosition.x * 101.5 + 10}%`,
    left: `${currentPosition.y * 101 + 10}%`,
  });

  useEffect(()=> {
    getRobotPath();
  },[])

  console.log(currentPosition);
  console.log(robotStyle);
  console.log(robotPath);

  const moveRobot = (position) => {
    setCurrentPosition(position);
    setRobotStyle({
      top: `${position.x * 101.5 + 10}%`,
      left: `${position.y * 101 + 10}%`,
    });
  };

  const getRobotPath = () => {
    let { x, y } = currentPosition;
    const path = [];

    actionSequence.map((action, i) => {
      switch (action) {
        case 'down':
          path.push([x + 1, y]);
          x++;
          break;
        case 'left':
          path.push([x, y - 1]);
          y--;
          break;
        case 'right':
          path.push([x, y + 1]);
          y++;
          break;
        default:
        case 'up':
          path.push([x - 1, y]);
          x--;
          break;
      }
    });
    setRobotPath(path)
  };

  const moveRobotInSequence = () => {
    robotPath.forEach((path, i) => {
      setTimeout(() => {
        moveRobot({x:path[0], y:path[1]})
      }, 1000 * i);
    });
  };

  // moveRobotInSequence(actionSequence);

  return (
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
                    src="./public/imgs/robot.png"
                  ></img>{' '}
                </div>
              );
          }
          return (
            <div key={`${i}-${j}`} className={`grid-cell cell${i}-${j}`}></div>
          );
        });
      })}
    </div>
  );
};
