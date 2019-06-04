function handleHttp(req,res){
	
	if(req.method === "GET") {	
		if(req.url === "/"){
	res.writeHead(200,{"Content-type":"text/plain"});
	res.write("Hello World: ");
	res.end(Math.random().toString());
		}
		else{res.writeHead(403);}
	}
	
	else
	{
	res.writeHead(403);
	res.end("No");
	}

}

var host = "localhost";
var port = 8006;

var http = require("http");
var http_serv = http.createServer(handleHttp).listen(port,host);
