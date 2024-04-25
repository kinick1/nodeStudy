const http=require("http");
const query=require("querystring");

//post방식
// 패킷화 -> 조각조각 넘어온다.
// 1.패킷화된 데이터를 하나의 변수에 합쳐주기
// 2. 변수를 객체로 변환

http.createServer((req,res)=>{

    // 패킷화 된 데이터를 하나로 합치는 작업
    let body=""
    req.on("data",(data)=>{
        body+=data
    })
    
    // 데이터를 객체형태로 변환
    req.on("end",()=>{
        let data=query.parse(body);
        res.write("<table>")
        for(let i=1;i<10;i++){
                res.write(`
                    <tr>
                        <td>${data.num} * ${i} = ${i*data.num}</td>
                    </tr>
                    `
                );
        }
        res.write("</table>")
        res.end();
    })


    
}).listen(3001)