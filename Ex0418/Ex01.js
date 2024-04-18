// console.log("첫 노드 실행")

// node 기반으로 BackEnd 서버 만들기

// require :  모듈을 가져오는 기능
// http : 클라이언트에서 요청을 받고 응답해주는(요청을 처리한다) 서버의 기본 모듈
const http= require("http");

// console.log(eval("1+1"));

// http.createServer : 서버생성 (클라이언트에서 접근할 수 있게끔 서버를 만들어 준다)
http.createServer(function(request,response){

        // request : 요청(클라이언트 ->서버)
        // response : 응답 (서버-> 클라이언트)

        // callback함수 : 특정 함수 안에 호출되어 실행되어지는 함수

        // 요청 정보 확인
        let ip=request.connection.remoteAddress
        console.log(ip)
        if(ip===`::ffff:192.168.219.54`){
            console.log("A....")
        }
        else if(ip=="192.168.219.46"){
            console.log("sad")
        }
        else{
            console.log("a?")
        }

        
        
    // console.log("서버개시")
    //200 --> 정상 응답
    response.writeHead(200, {"Content-Type":"text/html; charset=utf-8"});
    response.write("<h1>묐꿻 꿃붥</h1>")

    response.end();// 여기까지 응답을 마무리 하겠다!
}).listen(3001);
//URL : 해당 하는 주소는 컴퓨터 서버에 접근하겠습니다.(요청을 보내겠습니다)
//http://loclahost:3001
//http://127.0.0.1:3001
//http://192.168.219.50:3001