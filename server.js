const express=require("express");

const app=express();
app.use(express.json());

const port=8081;

const toDoList=["learn","apply things","succed"];

app.get("/tods",(req,res)=>{
    res.status(200).send(toDoList);
});

app.listen(port,()=>{
    console.log(`NodeJs Server Started Running On Port ${port}`);
})
