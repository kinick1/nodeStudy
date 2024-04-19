// 3002을 포트 번호로 지니는 서버를 생성해주세요
const http=require("http");
//url : 주소값에 있는 쿼리스트링 문자열을 객체형태로 변경해주는 모듈
const url=require("url");

http.createServer(function(request,response){
    // 요청 방식 확인 : request.method
    if(request.method=='GET'){
        console.log("GET")
    }
    else if(request.method=='POST'){
        console.log("POST")
    }

    //requset : 요청한 정보에 대한 전체 데이터가 담겨있다.

    response.writeHead(200, {"Content-Type":"text/html; charset=utf-8"});
    response.write("<h1>서버 접속 성공!</h1>")
    
    // request.url : 쿼리 스트링 으로 보낸 데이터를 문자열로 꺼내오겠다.
    console.log(request.url)
    // 쿼리스트링으로 보낸 문자열을 객체형식으로 변환하겠습니다.
    // url.parse(request.url,true) --> 쿼리스트링 부분만 사용하겠습니다.
    
    let query=url.parse(request.url,true).query
    console.log(query.data)

    response.end();
}).listen(3002);