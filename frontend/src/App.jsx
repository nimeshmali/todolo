import React,{useState,useEffect} from "react";
import axios from "axios";
import Items from "./components/Items";
import Date from "./components/Date";
import Input from "./components/Input";


function App() {
  const [cnt,setCnt] = useState(0);
  const [date,setDate] = useState("");
  const [text, setText]= useState("");
  const [data,setData]= useState([]);
  // const [compTask,setCompTask]=useState([]);
  const handleChange = async() =>{
    const response = await axios.get("http://localhost:5000/");
    setDate(response.data);
  }
  useEffect(()=>{
    handleChange();
  },[]);

  const addItem = ()=>{
    if(text!==""){
      setCnt(cnt+1);
      setData([...data,{id: cnt,value: text}])
      setText("");
    }
  }
  // const changeTask=(ind,data)=>{
  //   setCompTask([...compTask,{id:ind,value:data}]);
  // }
  return (
    <div>
      
      <Date val = {date}/>
      <h3 className="font-bold ">tasks</h3>
      <div>
        {
          data.map((data)=>(
            <Items key = {data.id} ind={data.id} data = {data.value}/>
          ))
        }
      </div>
      <h3 className="font-bold">completed tasks</h3>
      <Input text = {text} addItem = {addItem}  setText={setText} />
      
    </div>
    
  )
}

export default App;
