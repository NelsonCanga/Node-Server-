// o require é para fazer o import de bibliotecas
var http = require('http'),// importando protocolo http
 arquivo = require('fs');// file system
var server = http.createServer(function(req,res){
  res.writeHead(200 , {'content-type': 'text/html'});
  //__dirname() = retorna o diretorio do projecto
  arquivo.readFile(__dirname+'/arquivo/index.html', function(err, html ){
    if(err){
    res.write(' arquivo nao encontrado index.html ');
    }else{
      res.write(html);
    }
    res.end();
  });

});
server.listen(3000, function(){
  console.log('servidor rodando na porta 3000');
})
