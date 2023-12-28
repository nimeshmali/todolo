import React from "react";
import './items.css'
const Items = (props)=>{
    const text = props.data.value;
    const idx = props.ind;
    var isCheck = false;
    var opi = "";
    var textDec="";
    if(props.ifChecked){
        opi="opacity-80";
        textDec="line-through";
    }
    else{
        opi="";
        textDec="";
    }
    return(
        <div className={`flex items-color items-center items-color hover:opacity-65 rounded text-white my-2 mx-3 ${opi}`}> 
            <div className="inline-flex items-center ml-5">
                <label className="relative flex items-center p-3 rounded-full cursor-pointer" htmlFor="customStyle">
                    <input type="checkbox" defaultChecked={props.ifChecked}
                    onClick={
                        (e)=>{
                            isCheck=e.target.checked;
                            
                            props.changeTask(text,idx,isCheck);
                        }
                    }
                    className="before:content[''] peer relative h-8 w-8 cursor-pointer appearance-none rounded-full border-2 border-white items-color transition-all before:absolute before:top-2/4 before:left-2/4 before:block before:h-12 before:w-12 before:-translate-y-2/4 before:-translate-x-2/4 before:rounded-full before:bg-blue-gray-500 before:opacity-0 before:transition-opacity checked:border-zinc-400 checked:bg-zinc-400 checked:before:items-color hover:scale-105 hover:before:opacity-0"
                    id="customStyle"  />
                    <span
                    className="absolute text-white transition-opacity opacity-0 pointer-events-none top-2/4 left-2/4 -translate-y-2/4 -translate-x-2/4 peer-checked:opacity-100">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-3.5 w-3.5" viewBox="0 0 20 20" fill="currentColor"
                        stroke="currentColor" stroke-width="1">
                        <path fill-rule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clip-rule="evenodd"></path>
                    </svg>
                    </span>
                </label>
            </div>
            <p className={`text-l font-normal ${textDec}`}>{props.data.value}</p>
        </div>
    )
}
export default Items;