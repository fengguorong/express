var express=require("./express.js");
var app=express("abc");
app.listen(8888);
/*
*     模板引擎  晦涩    在一个语言里面可以执行另外一个语言的技术
*     php  模板引擎  .net  .asp  后缀名来解析
*
*
* */
app.set("/abc/",function(req,res){
    res.send("abc");
})
app.set("/a/",function(req,res){
    res.setHeader("Content-Type","text/html;charset=utf-8");
    res.writeHead(200);
    var a=3;
    var b=10;
    var c=a+b;
    res.sendFile("../abc/index.html");
})
app.set("/abc/:id",function(req,res){
   res.send(res.param.id);
   // var result=query("select * from abc where id="+res.param.id);

})



