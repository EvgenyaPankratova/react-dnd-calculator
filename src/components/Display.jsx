import {useDrag} from 'react-dnd';

function Display({calc, result, id}){

   

   return <div className="display"  draggable>
        {/* <button className="display__btn btn btn-outline-dark" type="button">Display</button> */}
        <output className="display__btn btn btn-outline-dark" name="result">
            {/* {result ? <span>({result})</span> : ''} */}
            {calc || '0'}
        </output>
        
    </div>
}

export default Display;