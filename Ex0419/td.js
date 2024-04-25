const http=require("http");
const url=require("url");

http.createServer(function(request,response){
    if (request.url === '/favicon.ico') {
        response.writeHead(200, {'Content-Type': 'image/x-icon'});
        response.end();
        return;
    }
    let query=url.parse(request.url,true).query
    const num = parseInt(query.data);
    response.writeHead(400, {'Content-Type': "text/html; charset=utf-8"});
    if (num > 0) {
        let tdTags = '';
        for (let i = 1; i <= num; ++i) {
            tdTags += `<td>${i}</td>`;
        }
        response.write(`<table border='1'><tr>${tdTags}</tr></table>`);
    }else{
        response.write(`숫자만 입력r`)
    }


    response.end(); 
}).listen(3003);