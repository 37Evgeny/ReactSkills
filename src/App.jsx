import logo from './logo.svg';
import './App.css';
import React, { useEffect, useState } from 'react';

function App() {


  const [theme, setTheme] = useState('light');

  const handleToogle = () => {
    setTheme((toggle) => (toggle === 'light' ? 'dark' : 'light'))
  };


  return (
    <div className="App" id={theme}>
      <span>{theme}</span>
     <label className="switch">
        <input onChange={handleToogle}  type="checkbox" className="slider"/>
        <span  className='slider' ></span>
     </label>
    </div>
  );
}

export default App;
