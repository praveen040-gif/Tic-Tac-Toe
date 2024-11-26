import { useState } from 'react';
import './App.css';
import Box from './components/box';


function App() {
  const WIN_CONDITIONS = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
  ]
  const [box,setbox]=useState(Array(9).fill(null))
  const [xplaying,setxplaying]=useState(true)
  const[isnext,setnext]=useState(true)
  const [win,setwin]=useState(false)
  const [winner,setwinner]=useState(null)
  const [tie,settie]=useState(false)

  const handlebox=(idx)=>
  {
    const updatebox=box.map((values,idx1)=>{
      if(idx===idx1)
      {
        return xplaying?'X':'O'
      }
      else{
        return values
      }

    })
    const winner=checkWinner(updatebox)
    console.log(winner)
    setwinner(winner)
    setbox(updatebox)
    setxplaying(!xplaying)
    setnext(!isnext)
    if (!updatebox.includes(null))
    {
            settie(true)
    }
  }
  const checkWinner=(box)=>
  {
    for(let i=0;i<WIN_CONDITIONS.length;i++)
    {
      const [x,y,z]=WIN_CONDITIONS[i];
      if(box[x] && box[x]===box[y] && box[y]===box[z])
      {
           setwin(true)
           return box[x]
      }
    }
    return null
  }
  
  const submit=()=>
  {
    setbox(Array(9).fill(null))
    setwin(false)
    settie(false)
  }

  return (
    <div className="App">
      <Box value={box} click1={handlebox} curr={isnext} submit={submit} win={win} winner={winner} tie={tie}/>
    </div>
  );
}

export default App;
