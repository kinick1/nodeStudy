const http=require("http");
const url=require("url");

//queryString 모듈 : post방식으로 전송한 데이터를
const qs=require("querystring");
//POST 방식
http.createServer(function(request,response){

    let body=""
    //1. 요청데이터 전송 확인단계
    request.on("data",function(data){
        // data => 사용자가 서버로보낸 데이터
        body+=data
        console.log(body);
    })

    //2. 데이터 파싱
    request.on("end",function(){
        let postData=qs.parse(body);
        console.log(postData);
        // 로직 작성
        response.end();
    })

}).listen(3005);


// http.createServer(function(request,response){
//     if (request.url === '/favicon.ico') {
//         response.writeHead(200, {'Content-Type': 'image/x-icon'});
//         response.end();
//         return;
//     }
//     let query=url.parse(request.url,true).query
//     let idData=(query.ID)
//     let pwData=(query.PW)

//     response.writeHead(200, {"Content-Type":"text/html; charset=utf-8"});
//     if(idData=="smhrd"&& pwData=="123"){
//         response.write(`로그인 성공`)
//     }else{
//         response.write(`로그인 실패`)
//     }


//     response.end();
// }).listen(3005)
// 3005번으로 서버 오픈
// 사용자 입력 ID : smhrd , PW : 123

    /*
    response.writeHead(200, {"Content-Type":"text/html; charset=utf-8"});
    idData=="smhrd"&&pwData=="123"?
    response.write("로그인"):
    response.write("실패");
    */