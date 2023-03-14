import Button from "./Button";
import {useDrag} from 'react-dnd';


function EqualsSign({calculate, id}){
//   const [{isDragging}, drag] = useDrag(() => ({
//     type: 'equalsSign',
//     item: {id: id},
//     collect: (monitor) => ({
//         isDragging: !!monitor.isDragging(),
//     })
// }))

      return <div className="equals-sign" draggable>
    
        <button class="equals-sign__btn btn btn-outline-dark" type="button" onClick={calculate}>=</button> 

     </div>
    
}

export default EqualsSign;