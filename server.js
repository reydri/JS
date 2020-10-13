const http = require('http');
// const lorem = require('lorem-ipsum');
// const l = new lorem.LoremIpsum();

const srv = http.createServer(function(req, res){
	res.writeHead(200, {'Content-Type' : 'text/html'});
	// lor = l.generateSenteces(1);
	res.write('Hello <b>World</b>');
	res.end();
});
// '<html><title>foo</title><body><p>'+lor+'</p></body></html>'

console.log('listen di port 8000');
srv.listen(8000);