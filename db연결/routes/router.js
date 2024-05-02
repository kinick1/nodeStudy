// 라우터 제작
// 1) 모듈 호출, 2) 모듈 exports, 3) 라우터 제작
// exports한 다음에, 반드시 app require하고, use를 통해서 등록!

const express = require("express");
const router = express.Router();
const path = require("path");
const conn = require("../config/db");

// 1. 기본경로를 설정 -> 루트 경로
router.get("/", (req,res)=>{
    // 사용자가 메인으로 접근하면, main.html 파일을 보여주세요!
    res.sendFile(path.join(__dirname,"..","public","main.html"));
})

// 2. 셀렉트 요청이 들어오면 처리해주는 로직
router.get("/select", (req, res)=>{
    
    // DB에 접근해서 데이터를 반환 => get방식 (데이터 조회만)
    let sql = "select * from nodejs_member";
    conn.query(sql,(err, rows)=>{
        // err -> 통신에 실패했을 때 (서버의 문제, 쿼리문 문법 오류)
        // rows -> DB에 접근해서 실행한 결과(가져온 데이터)를 담아주는 변수
        //      -> 실행 결과를 배열로 받아옴 
        // res.send(rows);

        // if문으로 써도 됨
        if (rows.length>0){
            // 통신 연결 성공
            res.send(rows);
        }
        else{
            // console.log("TGest")
            // 데이터가 담겨져있지 않을 때 (통신 실패가 아님. 통신은 성공함)
            // 통신에 성공했지만 데이터를 아무것도 못 가져왔을 때
            res.send({data :"회원이 존재하지 않습니다."});
        }
    });
})

// 3. insert router 생성
router.get("/insert", (req,res)=>{
    //console.log(req.query)
    //let sql = `insert into nodejs_member values ('${req.query.id}','${req.query.pw}','${req.query.nick}')`
    let sql = `insert into nodejs_member values (?,?,?)`
    conn.query(sql,[req.query.id,req.query.pw,req.query.nick], (err,rows)=>{
        console.log(err)
        if(rows.affectedRows==1){
            console.log(rows)
        }
        else{
            console.log(err)
        }
    })
})

// 4. delete
router.get("/delete", (req, res)=>{
    console.log(req.query)
    //let sql = "delete from nodejs_member where id = 'smhrd'";
    let sql = `delete from nodejs_member where id= ?`
    conn.query(sql,[req.query.userID], (err, rows)=>{
        if (rows.affectedRows>0){
            
            res.send({data:1})  // -> 크롬 F12에 출력됨          
        }
        else {
            // 삭제 실패
            res.send({data:0})
        }
    })
})

module.exports = router;