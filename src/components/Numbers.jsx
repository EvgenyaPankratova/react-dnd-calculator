import {useDrag} from 'react-dnd';

function Numbers({id, updateCalc, createDigits}){


    return <div className="numbers" draggable>
        
        {/* <button class="btn btn-outline-dark" type="button">7</button>
        <button class="btn btn-outline-dark" type="button">8</button>
        <button class="btn btn-outline-dark" type="button">9</button>
        <button class="btn btn-outline-dark" type="button">4</button>
        <button class="btn btn-outline-dark" type="button">5</button>
        <button class="btn btn-outline-dark" type="button">6</button>
        <button class="btn btn-outline-dark" type="button">1</button>
        <button class="btn btn-outline-dark" type="button">2</button>
        <button class="btn btn-outline-dark" type="button">3</button> */}

        {createDigits()}
        <button class="zero btn btn-outline-dark" type="button" onClick={() => updateCalc('0')}>0</button>
        <button class="btn btn-outline-dark" type="button" onClick={() => updateCalc(',')}>,</button>

    </div>
}

export default Numbers;