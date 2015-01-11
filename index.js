// require the file server.js at the same directory level 
// and call it a local variable server

var server = (require("./server.js"));
var router =(require("./router.js"));

// server.start has access to the start function 
// on the server.js file/page 
server.tart(router.pout);