import React from 'react';
import { useDrag } from 'react-dnd';
// import styles from '../styles/Draggable.module.css';

function Draggable({ children, type, item, text, style, hideWhenDrag, state, component }) {
  const [{ isDragging }, drag] = useDrag(
    () => ({
      type,
      item,
      collect: (monitor) => ({
        isDragging: !!monitor.isDragging(),
      }),
    }),
    [state]
  );

  if (isDragging && hideWhenDrag) {
    return <span  ref={drag}></span>;
  }

  return (
    <span
    
      ref={drag}
    >
      <span >{component}</span>
      {children}
    </span>
  );
}

export default Draggable;