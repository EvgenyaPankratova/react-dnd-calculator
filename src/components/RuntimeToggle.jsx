import Runtime from "./Runtime";
import Constructor from "./Constructor";
import { useState } from "react";
import {Link} from 'react-router-dom';
import {ReactComponent as Arrows} from '../icons/arrows.svg';
import {ReactComponent as Eye} from '../icons/eye.svg';

function RuntimeToggle(){

     

    return <div className="runtime-toggle">
        
        <div className="runtime">
        <Link to='/runtime'><button type="button" className="runtime__btn btn btn-outline-dark btn-icon">
        <span className="icon" ><Eye/></span>Runtime
        </button></Link>
    </div>

         <div className="constructor">
         <Link to='/constructor'><button type="button" className="constructor__btn btn btn-outline-dark btn-icon">
         <span className="icon"><Arrows/></span>Constructor
        </button></Link>
     </div>

    </div>
}

export default RuntimeToggle;