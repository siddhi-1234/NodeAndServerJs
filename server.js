const http=require("http")
const port = 8081;

const toDoList=["learn","apply things","succed"];

http
.createServer((req,res)=>{
    // call back func
    const{method,url}=req;
    // console.log(method,url);
    if(url==="/todos"){
        if(method==="GET"){
            res.writeHead(200);
            res.write(toDoList.toString());
        }
    }
    res.end();
    // res.writeHead(200,{"Content-Type":"text/html"});
    // res.write("<h2>hey server started:-)</h2>");
    // res.end();
})
.listen(port,()=>{
    // callback func
    console.log(`NodeJs Server Started Running on Port ${port}`);
});

// http://localhost:8081

