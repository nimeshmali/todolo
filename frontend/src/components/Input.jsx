import React from "react";

const Input = (props)=>{
  
    
    return(
      <div className="flex justify-center my-8">
      
        <input type="text" className="w-5/6 mr-3" placeholder="add task" value={props.text} onChange={(e)=>{
          props.setText(e.target.value);
        }}/>
        <button onClick={props.addItem} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">submit</button>
      </div>
    )
}
export default Input;