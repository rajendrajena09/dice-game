

import { useState } from 'react';
import './App.css';
import Startplay from './Components/Startplay';
import Gameplay from './Components/Gameplay';



function App() {
const[isgamestarted,setisgamestarted]=useState(false);

const toggleGameplay = () => {
  setisgamestarted((prev) => !prev);
}

  return (
    <div>
       
       {isgamestarted ? <Gameplay /> : <Startplay toggle = {toggleGameplay} />}

          
    </div>
  );
}

export default App;
