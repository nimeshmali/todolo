import React from "react";
import './Date.css'
const Date = (props)=>{
    return(
        <div className="my-8 py-3 mx-3 pl-3 text-3xl font-bold text-white rounded main-color" >
            <p>{props.val}</p>
        </div>
    )
}
export default Date;