import React, {useReducer} from 'react'
import './style.css'


const reducer =(state, action)=>{
if(action.type==="INCREMENT"){
    state = state + 1;
}
if(state > 0 && action.type==="DECREMENT"){
    state = state - 1;
}
return state;
}

const UseReducer = () => {
    const initialState = 0;
const [state, dispatch ]= useReducer(reducer, initialState)

    const increment = ()=>{
        
        dispatch({type:'INCREMENT'})
    }
    const decrement = ()=>{
        dispatch({type:'DECREMENT'})
        
    }
  return (
    <>
    <div className="center_div">
        <p>{state}</p>
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

export default UseReducer