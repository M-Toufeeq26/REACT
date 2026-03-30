import axios from 'axios'
import { useEffect, useState } from 'react'

const App = () => {
  const [index, setindex] = useState(1)
  const [data, setdata] = useState([])
  let getimages = async() => { 
    const images = await axios.get(`https://picsum.photos/v2/list?page=${index}&limit=20`)
    setdata(images.data)
    } 

    useEffect(function() {
      getimages()
    }, [index])

  let printimages = ''

 if(data.length > 0){
  printimages = data.map((elem,idx) => {
    return <a href={elem.url} target="_blank" >
      <div className='funcimgreturn'>
      <img src={elem.download_url} alt="no images found" /><span>{idx}</span>
      <h2>{elem.author}</h2>
    </div>
    </a>
  })
 }
  return (
    <div className='parent'>

      <div className='jsximgreturn'>
        {printimages}
      </div>
      < div className='PNcontainer'>
        <button className='PN' onClick={() => {
          if(index > 1){
            setindex(index - 1)
          }
        }}>Prev</button>
        <h4 className='fixed'>Page {index}</h4>
        <button className='PN' onClick={() => {
          setindex(index + 1)
        }}>Next</button>
      </div>
    </div>
  )
}

export default App
