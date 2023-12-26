import React from "react";

const Input = (props)=>{
  
    
    return(
        <div >
          <input type="text" placeholder="task" value={props.text} onChange={(e)=>{
            props.setText(e.target.value);
          }}/>
          <button onClick={props.addItem}>submit</button>
        </div>
    )
}
export default Input;