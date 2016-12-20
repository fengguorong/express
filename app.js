var express=require("./express.js");
var app=express("abc");
app.listen(8888);

app.set("/abc/",function(req,res){
    res.send("abc");
})
app.set("/abc/:id",function(req,res){
    res.send(res.param.id);
})



