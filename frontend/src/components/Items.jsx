import React from "react";

const Items = (props)=>{
    const text = props.data.value;
    const idx = props.ind;
    var isCheck = false;
    
    return(
        <div className="flex"> 
            <input type="checkbox" defaultChecked={props.ifChecked} onClick={
                (e)=>{
                    isCheck=e.target.checked
                    props.changeTask(text,idx,isCheck);
                }
            }/>
            <p>{props.data.value}</p>
        </div>
    )
}
export default Items;