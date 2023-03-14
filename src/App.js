
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Constructor from './components/Constructor';
import Runtime from './components/Runtime';
import Main from './components/Main';
import { NotFound } from './components/NotFound';
import CalculatorZone from './components/CalculatorZone';



function App() {
  return (
    
   <BrowserRouter  /*basename='/react-dnd-calculator'*/ > {/*указываем название репозитория как домашнюю страницу, относительно которой остальные пути*/}
     <main className='container content'>
       <Routes >
         <Route path='/' element={<Main/>}/>
         <Route path='/runtime' element={<Runtime/>}/>
         <Route path='/constructor' element={<Main/>}/>
         <Route path='*' element={<NotFound/>}/>   {/* звёздочка означает любой текст, кроме указанных путей, который мы можем написать  */}
       </Routes>
     </main>
   </BrowserRouter>

 );
}

export default App;
