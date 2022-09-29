import React, {useEffect, useState} from 'react'
import './style.css'


const UseEffect = () => {
    const initialState = 0;
    const [data, setData] = useState(initialState)

    useEffect(()=>{
      document.title = `message click (${data})`
    })

    const increment = ()=>{
        
        setData(data+1)
    }
  return (
    <>
    <div className="center_div">
        <p>{data}</p>
        <div class="button2" onClick={()=>increment()}>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            Increment
        </div>
    </div>
    </>
  )
}

export default UseEffect