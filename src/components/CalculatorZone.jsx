import {useState, useRef} from 'react';
import Display from "./Display";
import OperationButtons from "./OperationButtons";
import Numbers from "./Numbers";
import EqualsSign from "./EqualsSign";
import Button from "./Button";


function CalculatorZone({box1, setBox1}){

  
    // const createDigits = ( ) => { //создаём массив чисел от 1 до 9, чтобы передать в Numbers
    //     const digits = [];
    //     for(let i = 1; i < 10; i++){
    //         digits.push(
    //             <button 
    //             onClick ={() => updateCalc(i.toString())}
    //             className={`btn btn-outline-dark div${i}`} 
    //             type="button" key={i}>{i}</button>  //+ динамически создаём классы, чтоб управлять grid в css
    //         )
    //     }
    //     return digits;
    // }

    // const [calc, setCalc] = useState('');
    // const [result, setResult] = useState('');

    // const ops = ['/', '*', '-', '+', ','];

    // const updateCalc = (value) => {
    //     if(ops.includes(value) && calc === '' || 
    //         ops.includes(value) && ops.includes(calc.slice(-1)) ||
    //         calc.toString().length > 7
    //     ){
    //         return;
    //     }


    //     setCalc(calc + value);

    //     if(!ops.includes(value)){
    //         setResult(eval(calc + value).toString()) //выполняем код, представленный строкой
    //     }
    // }

    // const calculate = () => {
    //     if(!isFinite(eval(calc))){
    //         setCalc('не определено'); //проверяем, является ли результат конечным числом. напр., при делении на ноль
    //     } else{
    //         setCalc(+eval(calc).toFixed(8).toString());
    //     } 
        
    // }


    return <div className="calculator" >
        
        
        {/* {box1.map((item) => <div className="d-grid gap-2" draggable>{item.component}</div>)} */}
            {/* <Display calc={calc} result={result}/>
            <OperationButtons updateCalc={updateCalc}/>
            <Numbers createDigits={createDigits} updateCalc={updateCalc}/>
            <EqualsSign updateCalc={updateCalc} calculate={calculate}/> */}
        
        
    </div>
}

export default CalculatorZone;
