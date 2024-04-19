const http= require("http");
const url=require("url");
http.createServer(function(request,response){
        
    if (request.url === '/favicon.ico') {
        response.writeHead(200, {'Content-Type': 'image/x-icon'});
        response.end();
        return;
    }
    
    
    let query=url.parse(request.url,true).query
    response.writeHead(200, {"Content-Type":"text/html; charset=utf-8"});
    response.write(`<h1>${Number(query.data)}+${Number(query.data1)}=${(Number(query.data)+Number(query.data1))}<h1>`)

    response.end();
}).listen(3001);