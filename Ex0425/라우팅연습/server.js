const http=require("http");
const fs=require("fs").promises

http.createServer(async(req,res)=>{

    // 작업
    // 만약 요청에서 들어온 경로가 -> soccer라면 -> soccer.html
    // 만약 요청에서 들어온 경로가 -> baseball -> baseball.html
    // console.log(req.url)

    // 실습
    // req.url -> soccer면 -> soccer.html
    let data=""
    if(req.url=='/soccer'){   
        data=await fs.readFile("./soccer.html");
    }

    // req.url -> baseball -> baseball.html
    else if(req.url=="/baseball"){
        data=await fs.readFile("./baseball.html");
    }
    res.write(data)
    res.end();
}).listen(3000)