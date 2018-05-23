const http = require('http');
var fs = require('fs');
var url = require('url');
//----------------------
var db;
var dbarray2;
var timer;//시간
var Data_db;
//웹변수들
var url_S;
var hostname;
var portt;
var htmlfile;
var folder;
var a;
//모듈에서만 쓸 함수
function makearray(c,x,y){
  dbarray2 = [];
  for(y=0;y<x;y++){
  dbarray2.push(c);
}
return dbarray2
}
//array제작
module.exports.array = function(a){
  if(arguments.length==1){
    return a;
  }
  db = [];
  for(var i in  arguments){
    db.push(arguments[i]);
  } 
  return db   
};
/*zero*/
module.exports.zero = function(x,y){
    db = [];
    if(y==null){for(y=0;y<x;y++){db.push(0);}}
    else{for(var i=0;i<y;i++){db.push(makearray(0,x));}}return db}
/*one*/
module.exports.one = function(x,y){
  db = [];
  if(y==null){for(y=0;y<x;y++){db.push(0);}}
  else{for(var i=0;i<y;i++){db.push(makearray(1,x));}}return db}
/*two*/
module.exports.two = function(x,y){
  db = [];
  if(y==null){for(y=0;y<x;y++){db.push(0);}}
  else{for(var i=0;i<y;i++){db.push(makearray(1,x));}}return db}
/*echo 함수*/
module.exports.echo = function(a){
  console.log('array([\n['+a.join('],\n[')+'])');
}
/*일차방정식 math */
module.exports.math = function(a){
  console.log('array([\n['+a.join('],\n[')+'])');
}
/*arange array*/
module.exports.arange = function(a,x,y){
  y = [];
  for(var x=0;x<a;x++){
     y.push(a);
  }
  return y
}
/*Web server 관련*/
module.exports.setting = function(a){
  htmlfile = a.file;
  hostname = a.ip;
  portt = a.port;
}
//서버 세팅
//웹서버 열기
module.exports.on = function(){
  const server = http.createServer((req, res) => {
      for(var a in htmlfile){
        if(req.url == '/'){
          res.writeHeader(200,'Content-Type', 'text/html');
          res.end(fs.readFileSync('index.html', 'utf8'));
        }
        if(req.url == '/'+htmlfile[a]){
          Data_db = htmlfile[a].split('/');
          res.writeHeader(200,'Content-Type', 'text/'+Data_db[1]);
          res.end(fs.readFileSync(htmlfile[a], 'utf8'));
          }
      }  
  });
  
  server.listen(portt, hostname, () => {
    console.log(`Server running => http://${hostname}:${portt}/ by c4.js BOAT`);
  });
}
