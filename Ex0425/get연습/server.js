const http=require("http");
const url=require("url");
/*
    서버는 반드시 구조를 이해해야 한다.
    서버의 필수 요소는 1) 서버생성 2)포트 지정
    1. 서버 생성 모듈 ->http
    2. get방식 데이터 변형 -> url 
*/
http.createServer((request,response)=>{

    if (request.url === '/favicon.ico') {
        response.writeHead(200, {'Content-Type': 'image/x-icon'});
        response.end();
        return;
    }
    
    // 프론트 페이지에서 넘겨준 num을 활용해 구구단 출력
    // console.log(request.url);

    let data=url.parse(request.url,true).query
    console.log(Number(data.num))

    let tdTags = '';
    for (let i = 1; i <10; i++) {
        tdTags += `<tr><td>${data.num} * ${i} = ${i*data.num}</td></tr>`;
    }
    response.write(`<table border='1'>${tdTags}</table>`);

    response.end();
}).listen(3000)

//get방식에서는 데이터가 url을 통해서 넘어온다.
// url 모듈을 활용해서 컴퓨터가 이해할수 있게 변형
// 응답할때는 res객체를 활용한다.
// 페이지 자체를 서버가 만드는 행워 -> 서버 사이드 렌더링