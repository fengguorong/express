var str=`
<div>
 <%=abc%>
<%if(abc){%>
  <strong><%=abc%></strong>;
<%}%>
<%for(var i=0;i<10;i++){%>
 <em><%=i%></em>
<%}%>
</div>
`;
var obj={abc:"我是字符串"};
var tpl=str.replace(/\n/g,"\\n").replace(/<%=([\s\S]+?)%>/g,function(a,b){
    return  "'+"+b+"+'";
}).replace(/<%([\s\S]+?)%>/g,function(a,b){
    return  "'\n"+b+"tpl+='";
})



tpl="with(obj){\nvar tpl='"+tpl+"';\n return tpl}";

console.log(tpl);
var a=new Function("obj",tpl);
//console.log(a(obj))

console.log(a(obj));






