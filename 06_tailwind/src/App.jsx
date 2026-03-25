import React from 'react'

const App = () => {
  return (
    <div className='h-screen w-full bg-gray-900 flex gap-10 justify-center items-center'>
      <div className='h-65 w-65 bg-purple-600 pl-25 pt-25'>Box--1</div>
      <div className='h-65 w-65 bg-blue-600 rounded-full pl-25 pt-25'>Box--2</div>
      <div className='h-65 w-65 bg-green-600 pl-25 pt-25'>Box--3</div>
    </div>
  )
}

export default App