import { useState } from "react";
import {useDrag} from 'react-dnd';


function OperationButtons({updateCalc, id}){

    // let board, item;

    // const display = document.querySelector('.display');
    // const numbers = document.querySelector('.numbers');
    // const operationButtons = document.querySelector('.operation-buttons');
    // const equal = document.querySelector('.equals-sign');

    // const [boards, setBoards] = useState([
    //     {id: 1, title: 'calculatorZone', items: [{id: 1, display}, {id: 2, operationButtons}, {id: 3, numbers}, {id: 4, equal}]},
    //     {id: 2, title: 'dndZone'}
    // ])

    // const [currentItem, setCurrentItem] = useState(null);
    // const [currentBoard, setCurrentBoard] = useState(null);


    // function dragOverHandler(e){
    //     e.preventDefault()
    //     e.target.boxShadow = '0 4px 3px gray'
    // }

    // function dragLeaveHandler(e){
    //     e.target.boxShadow = 'none'

    // }

    // function dragStartHandler(e, board, item){
    //     setCurrentItem(item)

    // }

    // function dragEndHandler(e){
    //     e.target.boxShadow = 'none'
        
    // }

    // function dropHandler(e, board, item){
    //     e.preventDefault();
    //     const currentIndex = currentBoard.items.indexOf(currentItem);
    //     currentBoard.items.splice(currentIndex, 1);
    //     const dropIndex = board.items.indexOf(item);
    //     board.items.splice(dropIndex + 1, 0, currentItem);
    //     setBoards(boards.map(b => {
    //         if(b.id === board.id){
    //             return board
    //         }
    //         if(b.id === currentBoard.id){
    //             return currentBoard
    //         }
    //         return b
    //     }))
    // }


    return <div className="operation-buttons" draggable
     
    >
        <button className="btn btn-outline-dark" type="button" onClick={() => updateCalc('/')}>/</button>
        <button className="btn btn-outline-dark" type="button" onClick={() => updateCalc('*')}>х</button>
        <button className="btn btn-outline-dark" type="button" onClick={() => updateCalc('-')}>-</button>
        <button className="btn btn-outline-dark" type="button" onClick={() => updateCalc('+')}>+</button>

    </div>
}

export default OperationButtons;