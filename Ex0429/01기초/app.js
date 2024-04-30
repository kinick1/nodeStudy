/*

    Express 프레임워크
    - 기존 Node로만 개발했던 코드를 훨씬 간결하고, 유지보수하기 편하게 사용하는 프레임워크
    - Node.js  기술을 그대로 다 사용이 가능
    - 역할은 서버라는건 공통
    1) 서버 생성
    2) 포트번호를 지정

*/

// 서버생성을 위해 express모듈을 호출
const express=require("express");

// 미들웨어-> 모든 요청과 응답을 한군데에서 통제하는 역할 -> 메인 서버의 역할
const app=express();

// 정적 파일을 미들웨어에 등록
// 정적인 파일들은 public폴더에 관리(js,css,html,img...)
app.use(express.static("public"));



// 서버 생성
app.get("/",(req,res)=>{

    // res.writeHead(200,{"Content-Type":"text/html; charset=utf-8"})
    // res.write("<h1>서버 오픈</h1>")

    // res.end();

    //write VS send
    // write
    // - 컨텐츠헤드 작성 -> 인코딩 / end를 반드시 작성/ 여러줄 작성가능
    // send
    // -end, write, head를 하나에 묶어서 사용/ 여러ㅜㄹ을 보낼수 없다-> 템플릿으로 여러줄 전송
    //res.send(`<h1>보내진 페이지</h1>`)

    //html파일을 전송하는 방법
    //express는 파일을 불러들일때 반드시 절대 경로를 작성
    // 주의점! 사용자 마다 절대경로가 다르기 때문에 알아서 변환할수 있도록 작업
    // __dirname -> 현재 작업중인 폴더의 절대경로를 알아오는 키워드

    //res.sendFile("C:/Users/smhrd/Desktop/jun/nodeStudy/Ex0429/01기초/index.html");

    console.log(__dirname);
    res.sendFile(__dirname+"/index.html")



})

// 포트를 지정
// 포트 지정은 반드시 페이지 최하단에 작성
app. listen(3000);