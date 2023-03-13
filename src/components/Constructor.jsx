import React from 'react';
import {ReactComponent as Arrows} from '../icons/arrows.svg';

function Constructor(){
    return <div className="constructor">
         <button type="button" className="constructor__btn btn btn-outline-dark btn-icon">
            <span className="icon"><Arrows/></span>Constructor
        </button>
    </div>
}

export default Constructor;