import logo from './logo.svg';
import './App.css';
import React, { useEffect, useState } from 'react';

function App() {

  const [count, setCount] = useState(0);
  const [open, setOpen] = useState(false)

  console.log(open)

  const nextCount = () => {
    setCount(count + 1)
  }

  const prevCount = () => {
    setCount(count - 1)
  }

  return (
    <div className="App">

        <p className='name'>
            Счетчик
        </p>
        <h1 className='counter'>
            {count}
        </h1>
        <div className='btn__cnt'>
        <button onClick={prevCount} className='prev'>
            минус
        </button>
        <button onClick={nextCount} className='next'>
            плюс
        </button>
        </div>
       
        {/* <div className='modal__cnt'>
            <div className='modal__open__btn'>
              <button onClick={()=>setOpen(true)} className='btn'>
                  Открыть окно
              </button>
            { open &&
                <div className='modal'>
                  <img src='./img/cat.jpeg' className='img__modal'/>
                  <img onClick={()=>setOpen(false)} src='./img/close.svg' className='close'/>
                 
              </div>
            }
            </div>
        </div> */}
    </div>

    
  );
}

export default App;
