// require the library http
var http = require("http");
// reuire the library url
var url = require("url");

function start(pout) {
	function onRequest(request, response) {
		var pathname = url.parse(request.url).pathname;
		console.log("Request for " + pathname +" recieved......");

		pout(pathname);

		response.writeHead(200, {"content-Type": "text/plain-o-"});
		response.write("Hello Waz-up");
		response.end();
	}
// http here is the local variable name not the library name
	http.createServer(onRequest).listen(3000);
	console.log("Server has started check your localhost 3000 page");

}

exports.tart = start;


// 									url.parse(string).query
//                                            |
//            url.parse(string).pathname      |
//                        |                   |
//                        |                   |
//                      ------ -------------------
// http://localhost:8888/start?foo=bar&hello=world
//                                 ---       -----
//                                  |          |
//                                  |          |
//         querystring.parse(string)["foo"]    |
//                                             |
//                    querystring.parse(string)["hello"]