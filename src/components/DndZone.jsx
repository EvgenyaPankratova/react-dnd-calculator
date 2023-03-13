import RuntimeToggle from "./RuntimeToggle"
import { useState } from "react";
import {useDrop} from 'react-dnd';
import React from 'react';
import {ReactComponent as Dnd} from '../icons/dnd.svg';
import Display from "./Display";
import OperationButtons from "./OperationButtons";
import Numbers from "./Numbers";
import EqualsSign from "./EqualsSign";
import DndComponent from "./DndComponent";

function DndZone({ title, children }){

    return <div className="dnd">
        
        <RuntimeToggle/>
        <div className="frame dnd__frame" > 
        {children}
        
        {/* <div className="icon dnd__frame__icon"><Dnd/> </div>
        <div className="subtitle dnd__frame__subtitle">Перетащите сюда</div>
        <div className="text dnd__frame__text">любой элемент <br></br>из левой панели</div> */}

        
        
        </div>
    </div>
}

export default DndZone