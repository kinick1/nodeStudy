const http=require("http");
const qs=require("querystring")

http.createServer(function(request,response){
    let body=""
    request.on("data",function(data){
        body+=data
    })
    request.on("end",function(){
        let postData=qs.parse(body);
        console.log(postData.name);
        let name=postData.name
        let html=Number(postData.html)
        let css=Number(postData.css)
        let nodejs=Number(postData.nodejs)
        let arduino=Number(postData.arduino)
        

        response.end();
    })
}).listen(3000)