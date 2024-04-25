/*

사용자가 서버에 접근했을때,
서버쪽에서 만튼 코드가 아니고, 만들어진 HTML파일 자체를 보여주기
-> 서버가 매번 코드를 작성하면 양이 한정적이다 -> 가독성이 낮음

*/

const http=require("http");
const fs=require("fs").promises;

http.createServer(async(req,res)=>{
    // index.html 파일을 불러와서 사용자에게 보여주기
    // 오류가 발생하는 이유
    // 노드 js는 기본적으로 비동기 싱글스레드 -> 작업이 빨리 끝나는대로 처리
    // 파일 읽기는 오래걸리는 작업 -> 쓰기작업을 먼저 시행
    // 순서를 임의로 변경 -> async await
    // async -> 비동기로 처리하겠다. -> 호출해주는 함수 앞에 작성
    // await -> 코드가 종료될때까지 기다리겠다! ->  기다리는 함수 앞에 작성
    let data=await fs.readFile("./index.html");
    res.write(data);

    res.end();
}).listen(3000)