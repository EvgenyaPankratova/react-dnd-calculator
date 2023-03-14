import Runtime from "./Runtime";
import Constructor from "./Constructor";
import { useState } from "react";
import {Link} from 'react-router-dom';
import {ReactComponent as Arrows} from '../icons/arrows.svg';
import {ReactComponent as Eye} from '../icons/eye.svg';

function RuntimeToggle(){

     

    return <div className="runtime-toggle">
        
        <div className="runtime">
        <button type="button" className="runtime__btn btn btn-outline-dark btn-icon">
        <Link to='/runtime'> <span className="icon" ><Eye/></span>Runtime</Link>
        </button>
    </div>

         <div className="constructor">
          <button type="button" className="constructor__btn btn btn-outline-dark btn-icon">
         <Link to='/constructor'><span className="icon"><Arrows/></span>Constructor</Link>
        </button>
     </div>

    </div>
}

export default RuntimeToggle;