import React from 'react'
import './box.css'


const Box = ({value,click1,curr,submit,win,winner,tie}) => {
  // console.log(value)
  const allempty=value.every((val)=>val===null);
  const current=curr?'X':'O';
  const color=allempty?'display':'display next';
  const style1=curr?'x1':'O1';
  const winstyle=winner==='X'?'x2':'o2';
  console.log(winstyle)
  return (
  
      <>
    <div className='grid'>
      
        {
        value.map((items,idx)=>
        {
          const style=items==='X'?'box x':'box o'
            // console.log(items,idx)
            return(
              <>
            <button className={`${style} ${win ? "disabled" : ""}`} onClick={()=>items===null && click1(idx)}>{items}</button>
            </>
            )
        })}
        </div>
        {
          
          allempty?<div className={color}>Start Game</div>:win?<div className='display display1'>winner:<span className={winstyle}>{winner}</span></div>:tie?<div className='display'>Match Tied</div>:<div className={color}>Next:<span className={style1}>{current}</span></div>
        }

        
        <button className='submit' onClick={submit}>Reset</button>
    </>
      
  )
}

export default Box
