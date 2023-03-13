import React from 'react';
import { useDrop } from 'react-dnd';
// import styles from '../styles/Droppable.module.css';

function Droppable({ accept, handleDrop, text, children, state, big, style, component }) {
  const [{ isOver, canDrop }, drop] = useDrop(
    () => ({
      accept,
      drop: (item, monitor) => handleDrop(item, monitor, state),
      collect: (monitor) => ({
        isOver: !!monitor.isOver({ shallow: true }),
        canDrop: !!monitor.canDrop(),
      }),
    }),
    [state] // Dependency
  );

  const isActive = isOver && canDrop;

  return (
    <div 
      
      style={style}
      ref={drop}
    >
      <span  >{text}</span>
      {children}
    
    </div>
  );
}

export default Droppable;