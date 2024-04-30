/*

    프론트에서 get방식으로 보낸 데이터를 처리해주는 서버

*/

const express=require("express");
const app=express();

//post방식에서는 미들웨어에 post데이터를 해석하라고 기능을 더해줘야한다.
// 필수로 등록해줘야한다. -> querystring 과 같은 역할
// 꺼내올땐 req.body -> 데이터가 저장
// app.get(), app.post() -> get방식과 post방식 각각 들어오는 요청을 따로 처리하겠다.
app.use(express.urlencoded({extended:true}))

app.get("/",(req,res)=>{

// express에서 get방식 데이터를 불러오는 방법
// req.query -> 넘오온 데이터가 객체화 되어서 출력
    let data=req.query
    console.log(data)
    res.end();
});



app.post("/",(req,res)=>{
    let data=req.body;
    console.log(data)
    res.end();
})

app.listen(3000);