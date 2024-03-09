import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
// import './counter'
import Counter from './counter'
import Team from './team'
import Users from './users'
import Friends from './friends'
function App() {
  function handClick(){
    alert('button clicked')
  }
  const handClick2 =()=>{
    alert('button clicked')
  }
  const addToFive=(num)=>{
    alert(num + 5)
  }

  return (
    <> 
      <h3>React Core concepts 2</h3> 

      <Friends></Friends>

      <Users></Users>

      <Team></Team>

    <Counter></Counter>
      {/* <button onclick="handClick()">Clicked me</button> */}
      <button onClick={handClick}>click me</button>
      <button onClick={handClick2}>click 2</button>
      <button onClick={() =>{alert('third clicked')}}>Third</button>
      {/* <button onClick={addToFive(3)}>four</button> */}
      <button onClick={() => addToFive(3)}>four</button>
    </>
  )
}

export default App
