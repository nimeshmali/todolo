import React,{useState, useEffect} from 'react';
import axios from "axios";
import './App.css';

function App() {
  const [data,setData] = useState("");

  const handleChange = async() =>{
    const response = await axios.get("http://localhost:5000/");
    setData(response.data);
  }
  useEffect(()=>{
    handleChange();
  },[]);

  return (
    <div className="App">
      <p>{data}</p>
    </div>
  );
}

export default App;
