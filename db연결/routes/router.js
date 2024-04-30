// 라우터 제작
// 1)모듈 호출 2) 모듈 exports 3)라우터 제작
//exports 한 다음에 반드시 app require하고 use통해서 등록

const express=require("express");
const router=express.Router();
const path=require("path");
const conn=require("../config/db");

//1. 기본 경로성절
router.get("/",(req,res)=>{
    // 사용자가 main으로 접근하면 main.html을 보여주세여
    res.sendFile(path.join(__dirname,"..","public","main.html"))
})

router.get("/select",(req,res)=>{
    let sql="select * from nodejs_member";
    conn.query(sql,(err,rows)=>{
        // rows -> db에 접근해서 실행한 결과를 담아주는 변수
        if(rows){
            //쿼리가 정상적으로 실행됐을때
            res.send(rows);
        }
    })
})

module.exports=router; 
