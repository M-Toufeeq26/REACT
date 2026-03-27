import axios from 'axios'
import { useState } from 'react'
const App = () => {

  const [data, setdata] = useState([])

  const getdata = async() => {
    const api = await axios.get('https://picsum.photos/v2/list')
    console.log(api.data)
    setdata(api.data)
  }

  return (
    <div>
      <button onClick={getdata}>click here</button>
      <div>
        {data.map(function(elem,idx) {
          return <h3>hello {elem.author} {idx}</h3>
        }) }
      </div>
    </div>
  )
}

export default App

