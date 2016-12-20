var http=require("http");
var url=require("url");
class express{
    constructor(param){
        this.setArr=[];
    }
    listen(port=80){
        this.port=port;
        this.create();

    }
    create(){
        var that=this;
        http.createServer(function(req,res){
            that.factory(req,res);
        }).listen(this.port);
    }

    set(url,callback){
            var obj={};
            obj[url]=callback;
           this.setArr.push(obj);
    }
    factory(req,res){
       var pathname=url.parse(req.url).pathname;
       this.setArr.forEach(function(obj){
            if(Object.keys(obj)[0]==pathname){
                res.send=function(val){
                    res.end(val);
                }
                obj[pathname](req,res);
            }
       })

    }

}

module.exports=function(param){
    return new express(param);
}