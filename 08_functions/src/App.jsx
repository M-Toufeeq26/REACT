import React from 'react'

const App = () => {
  function btnClicked(){
    console.log('Hello ');
    console.log('This is my first time working with functions in REACT ');
  }
  return (
    <div>
      <button onClick={btnClicked} className='btn'>Click</button>
    </div>
  )
}

export default App