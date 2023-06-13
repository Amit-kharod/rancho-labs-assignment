import React, { useState } from 'react';
import { DragDropContext, Draggable, Droppable } from 'react-beautiful-dnd';
import {
  BsArrowRight,
  BsArrowLeft,
  BsArrowUp,
  BsArrowDown,
  BsFillPlayFill,
} from 'react-icons/bs';
import { GrPowerReset } from 'react-icons/gr';

import { v4 as uuid } from 'uuid';

export const LogicPanel = ({ handlePlayButton }) => {
  const [logicBoxesState, setLogicBoxesState] = useState([]);

  const [arrowBoxes, setArrowBoxes] = useState([
    { id: 'box-1', action: <BsArrowLeft />, actionName: 'left' },
    { id: 'box-2', action: <BsArrowUp />, actionName: 'up' },
    { id: 'box-3', action: <BsArrowDown />, actionName: 'down' },
    { id: 'box-4', action: <BsArrowRight />, actionName: 'right' },
  ]);

  const onArrowDrop = (e) => {
    const { source, destination } = e;
    if (destination.droppableId === 'logic-box-droppable') {
      if (logicBoxesState.length >= 14) {
        return;
      }
      setLogicBoxesState([
        ...logicBoxesState,
        {
          id: uuid(),
          action: arrowBoxes[source.index].action,
          actionName: arrowBoxes[source.index].actionName,
        },
      ]);
    }
  };

  return (
    <div className="logic-panel">
      <DragDropContext
        onDragEnd={(e) => {
          onArrowDrop(e);
        }}
      >
        <h2>Logic Panel</h2>
        <Droppable droppableId="logic-box-droppable" direction="horizontal">
          {(provided, snapshot) => {
            return (
              <div
                ref={provided.innerRef}
                {...provided.droppableProps}
                className="logic-boxes"
              >
                {logicBoxesState.length > 0 ? (
                  logicBoxesState.map((logicBox, index) => {
                    return (
                      <Draggable
                        key={logicBox.id}
                        index={index}
                        draggableId={logicBox.id}
                        isDragDisabled={true}
                      >
                        {(provided, snapshot) => {
                          return (
                            <div
                              className="arrow-item"
                              {...provided.dragHandleProps}
                              {...provided.draggableProps}
                              ref={provided.innerRef}
                            >
                              {logicBox.action}
                            </div>
                          );
                        }}
                      </Draggable>
                    );
                  })
                ) : (
                  <h2 className="logic-box-placeholder">Drop arrows here...</h2>
                )}
              </div>
            );
          }}
        </Droppable>
        <div className="actions-panel">
          <Droppable
            isDropDisabled={true}
            droppableId="arrow-box-droppable"
            direction="horizontal"
          >
            {(provided, snapshot) => {
              return (
                <div
                  ref={provided.innerRef}
                  {...provided.droppableProps}
                  className="arrows-actions"
                >
                  {arrowBoxes.map((arrowBox, index) => {
                    return (
                      <Draggable
                        key={arrowBox.id}
                        index={index}
                        draggableId={arrowBox.id}
                      >
                        {(provided, snapshot) => {
                          return (
                            <>
                              <div
                                className="arrow-item"
                                ref={provided.innerRef}
                                {...provided.dragHandleProps}
                                {...provided.draggableProps}
                              >
                                {arrowBox.action}
                              </div>
                              {snapshot.isDragging && (
                                <div className="arrow-item dnd-copy">
                                  {arrowBox.action}
                                </div>
                              )}
                            </>
                          );
                        }}
                      </Draggable>
                    );
                  })}
                  {provided.placeholder}
                </div>
              );
            }}
          </Droppable>

          <button
            className="play"
            onClick={() => handlePlayButton(logicBoxesState)}
          >
            <BsFillPlayFill className="icon" />
            <span>Play</span>
          </button>
          <button
            className="reset"
            onClick={() => {
              setLogicBoxesState([]);
              handlePlayButton([]);
            }}
          >
            <GrPowerReset className="icon" />
          </button>
        </div>
      </DragDropContext>
    </div>
  );
};
