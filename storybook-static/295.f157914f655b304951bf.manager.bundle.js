(self.webpackChunkmantine=self.webpackChunkmantine||[]).push([[295],{19295:l=>{l.exports=function(f,t){return t=t||{},new Promise(function(p,d){var e=new XMLHttpRequest,u=[],a=[],n={},i=function(){return{ok:(e.status/100|0)==2,statusText:e.statusText,status:e.status,url:e.responseURL,text:function(){return Promise.resolve(e.responseText)},json:function(){return Promise.resolve(e.responseText).then(JSON.parse)},blob:function(){return Promise.resolve(new Blob([e.response]))},clone:i,headers:{keys:function(){return u},entries:function(){return a},get:function(r){return n[r.toLowerCase()]},has:function(r){return r.toLowerCase()in n}}}};for(var c in e.open(t.method||"get",f,!0),e.onload=function(){e.getAllResponseHeaders().replace(/^(.*?):[^\S\n]*([\s\S]*?)$/gm,function(r,s,o){u.push(s=s.toLowerCase()),a.push([s,o]),n[s]=n[s]?n[s]+","+o:o}),p(i())},e.onerror=d,e.withCredentials=t.credentials=="include",t.headers)e.setRequestHeader(c,t.headers[c]);e.send(t.body||null)})}}}]);
