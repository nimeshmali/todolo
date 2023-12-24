import Express from "express";
import cors from "cors";


const app = Express();
app.use(cors());
const port = 5000;

app.get("/",(req,res)=>{
    res.send("hellow nimesh");
})

app.listen({port},()=>{
    console.log(`Server running on port ${port}`);
})