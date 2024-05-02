/*
기존  node수업에서 app.js라는 파일을 사용했으나
react의 app.js와 이름이 겹쳐 server.js로 지칭
*/

const express=require("express");
const app=express();
const path=require('path');
const router=require('./routes/router');

app.use(express.static(path.join(__dirname,"react-project","build")))
app.set('port', process.env.PORT || 3000);



app.use(router)
app.listen(app.get('port'));