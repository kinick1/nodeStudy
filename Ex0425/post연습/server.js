const http=require("http");
const query=require("querystring");

http.createServer((req,res)=>{
    let body=""
    req.on("data",(data)=>{
        body+=data
    })
    console.log(body);


    res.end();
}).listen(3001)