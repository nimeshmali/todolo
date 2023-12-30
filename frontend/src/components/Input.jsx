import React from "react";
import './input.css'
const Input = (props)=>{
  
    
    return(
      <div className="flex justify-center my-8 rounded mx-3">
      
        <input type="text" className="w-full pl-2 text-white hover:opacity-75 inp rounded mr-3" placeholder="Add task" value={props.text} onChange={(e)=>{
          props.setText(e.target.value);
        }}/>
        <button onClick={props.addItem} className="right-50 text-white hover:opacity-75 font-bold rounded-full">+</button>
      </div>
    )
}
export default Input;