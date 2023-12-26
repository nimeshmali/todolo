import Express from "express";
import cors from "cors";


const app = Express();
app.use(cors());
const port = 5000;
const weekday = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
const mon = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

app.get("/",(req,res)=>{
    const date = new Date();
    const day = weekday[date.getDay()]; 
    const numDay = date.getDate();
    const month = mon[date.getMonth()];

    // const day = date.getDate();
    const newDay = day + ", " + numDay + " " + month;
    res.send(newDay);
})

app.listen({port},()=>{
    console.log(`Server running on port ${port}`);
})