import React from 'react';
import {ReactComponent as Eye} from '../icons/eye.svg';

function Runtime(){
    return <div className="runtime">
        <button type="button" className="runtime__btn btn btn-outline-dark btn-icon">
            <span className="icon" ><Eye/></span>Runtime
        </button>
    </div>
}

export default Runtime;