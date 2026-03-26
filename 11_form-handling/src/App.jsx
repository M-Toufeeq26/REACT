import React from 'react'

const App = () => {

  const submitHandler = (e) => {
    e.preventDefault()
    console.log('Form Submitted');
      
  }

  return (
    <div className='parent'>
      <form onSubmit={(e) => {
        submitHandler(e)
      }}>
        <input type="text" placeholder='Enter your name' />
        <button>Submit</button>
        <h1>check the console</h1>
      </form>
    </div>
  )
}

export default App