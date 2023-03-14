
import { useState} from "react";
import CalculatorZone from "./CalculatorZone";
import Display from "./Display";
import OperationButtons from './OperationButtons';
import Numbers from './Numbers';
import EqualsSign from './EqualsSign';
import RuntimeToggle from "./RuntimeToggle";

function Runtime(){


      const createDigits = ( ) => { //создаём массив чисел от 1 до 9, чтобы передать в Numbers
        const digits = [];
        for(let i = 1; i < 10; i++){
            digits.push(
                <button 
                onClick ={() => updateCalc(i.toString())}
                className={`btn btn-outline-dark div${i}`} 
                type="button" key={i}>{i}</button>  //+ динамически создаём классы, чтоб управлять grid в css
            )
        }
        return digits;
    }

    const [calc, setCalc] = useState('');
    const [result, setResult] = useState('');

    const ops = ['/', '*', '-', '+', ','];

    const updateCalc = (value) => {
        if(ops.includes(value) && calc === '' || 
            ops.includes(value) && ops.includes(calc.slice(-1)) ||
            calc.toString().length > 7
        ){
            return;
        }


        setCalc(calc + value);

        if(!ops.includes(value)){
            setResult(eval(calc + value).toString()) //выполняем код, представленный строкой
        }
    }

    const calculate = () => {
        if(!isFinite(eval(calc))){
            setCalc('не определено'); //проверяем, является ли результат конечным числом. напр., при делении на ноль
        } else{
            setCalc(+eval(calc).toFixed(8).toString());
        } 
        
    }

    
//     const [box1, setBox1] = useState([
//         { text: 'Display', component: <Display calc={calc} result={result}/> },
//         { text: 'OperationButtons', component: <OperationButtons updateCalc={updateCalc}/> },
//         { text: 'Numbers', component: <Numbers createDigits={createDigits} updateCalc={updateCalc}/> },
//         { text: 'EqualsSign', component: <EqualsSign updateCalc={updateCalc} calculate={calculate}/> },
//       ]);

//       const [box2, setBox2] = useState([
//        {component: <DndZone/>}
//       ]);

//   const handleBox1 = (item, monitor, state) => {
//     if (state.find((each) => each.text === item.text)) return;
//     // remove from box2
//     setBox2((prev) => {
//       const index = prev.findIndex((each) => each.text === item.text);
//       const copy = [...prev];
//       copy.splice(index, 1);
//       return copy;
//     });
//     // add to box1
//     setBox1((prev) => {
//       return [...prev, { text: item.text, component: item.component }];
//     });
//   };

//   const handleBox2 = (item, monitor, state) => {
//     if (state.find((each) => each.text === item.text)) return;
//     // remove from box1
//     setBox1((prev) => {
//       const index = prev.findIndex((each) => each.text === item.text);
//       const copy = [...prev];
//       copy.splice(index, 1);
//       return copy;
//     });
//     // add to box2
//     setBox2((prev) => {
//       return [...prev, { text: item.text, component: item.component }];
//     });
//   };

    return <div className="main runtime-main">


            <RuntimeToggle style={{pointerEvents: 'auto'}}/>

         
       
           
            <div className='calculator runtime-calculator'>
                <div className="d-grid gap-2">
            <Display calc={calc} result={result}/>
            <OperationButtons updateCalc={updateCalc}/>
            <Numbers createDigits={createDigits} updateCalc={updateCalc}/>
             <EqualsSign updateCalc={updateCalc} calculate={calculate}/>  
             </div>
            </div>

            
    </div>
}

export default Runtime;