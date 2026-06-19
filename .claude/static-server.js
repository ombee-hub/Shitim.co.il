const http=require('http'),fs=require('fs'),path=require('path');
const root=path.join(__dirname,'..');
const types={'.html':'text/html; charset=utf-8','.css':'text/css; charset=utf-8','.js':'text/javascript; charset=utf-8','.json':'application/json; charset=utf-8','.png':'image/png','.jpg':'image/jpeg','.jpeg':'image/jpeg','.gif':'image/gif','.svg':'image/svg+xml','.pdf':'application/pdf','.webp':'image/webp'};
http.createServer((req,res)=>{
  let p=decodeURIComponent(req.url.split('?')[0]);
  if(p==='/')p='/index.html';
  const fp=path.join(root,p);
  fs.readFile(fp,(e,data)=>{
    if(e){res.writeHead(404,{'Content-Type':'text/plain; charset=utf-8'});res.end('not found');return;}
    res.writeHead(200,{'Content-Type':types[path.extname(fp).toLowerCase()]||'application/octet-stream'});
    res.end(data);
  });
}).listen(8080,()=>console.log('serving Shitim on http://localhost:8080'));
