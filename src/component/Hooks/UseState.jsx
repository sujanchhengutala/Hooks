import React, {useState} from 'react'
import './style.css'


const UseState = () => {
    const initialState = 0;
    const [data, setData] = useState(initialState)
    const increment = ()=>{
        
        setData(data+1)
    }
    const decrement = ()=>{
        data > 0 ?setData(data-1):setData(0);
        
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
        <div class="button2" onClick={()=>decrement()}>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            Decrement
        </div>
    </div>
    </>
  )
}

export default UseState