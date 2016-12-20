var express=require("./express.js");
var app=express("abc");
app.listen(8888);


app.set("/",function(req,res){
    res.send("跟目录");
})
app.set("/abc",function(req,res){
    res.send("abc");
})

app.set("/aaa",function(req,res){
    res.send("aaa");
})