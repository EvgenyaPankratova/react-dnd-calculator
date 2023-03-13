
import {useDrag} from 'react-dnd';
import Display from "./Display";
import OperationButtons from "./OperationButtons";
import Numbers from "./Numbers";
import EqualsSign from "./EqualsSign";
import { createElement, useState } from 'react';

import React from 'react';
import Draggable from './Draggable';
import DragGroup from './DragGroup';
import Droppable from './Droppable';


// const reactElement = React.createElement('button', null, 'Hello World')

function DndComponent({box1, setBox1, box2, setBox2, handleBox1, handleBox2}) {
//   const [box1, setBox1] = React.useState([
//     { text: 'Display', component: <Display/> },
//     { text: 'OperationButtons', component: <OperationButtons/> },
//     // { text: 'Numbers', component: <Numbers/> },
//     { text: 'EqualsSign', component: <EqualsSign/> },
//   ]);

  // const [box2, setBox2] = useState([]);

  // const handleBox1 = (item, monitor, state) => {
  //   if (state.find((each) => each.text === item.text)) return;
  //   // remove from box2
  //   setBox2((prev) => {
  //     const index = prev.findIndex((each) => each.text === item.text);
  //     const copy = [...prev];
  //     copy.splice(index, 1);
  //     return copy;
  //   });
  //   // add to box1
  //   setBox1((prev) => {
  //     return [...prev, { text: item.text, component: item.component }];
  //   });
  // };

  // const handleBox2 = (item, monitor, state) => {
  //   if (state.find((each) => each.text === item.text)) return;
  //   // remove from box1
  //   setBox1((prev) => {
  //     const index = prev.findIndex((each) => each.text === item.text);
  //     const copy = [...prev];
  //     copy.splice(index, 1);
  //     return copy;
  //   });
  //   // add to box2
  //   setBox2((prev) => {
  //     return [...prev, { text: item.text, component: item.component }];
  //   });
  // };

  return (
    <>
      <Droppable
        accept='drag-3'
        handleDrop={handleBox1}
        text='Box1'
        state={box1}
      >
        <DragGroup>
          {box1.map((drag) => (
            <Draggable
              key={drag.text}
              type='drag-3'
              text={drag.text}
              component = {drag.component}
              item={{ text: drag.text, component: drag.component}}
              state={box1}
            />
          ))}
        </DragGroup>
      </Droppable>
      <Droppable
        accept='drag-3'
        handleDrop={handleBox2}
        text='Box 2'
        state={box2}
        
      >
        <DragGroup>
          {box2.map((drag) => (
            <Draggable
              key={drag.text}
              type='drag-3'
              text={drag.text}
              component = {drag.component}
              item={{ text: drag.text, component: drag.component }}
              state={box2}
            />
          ))}
        </DragGroup>
      </Droppable>
    </>
  );
}

export default DndComponent;