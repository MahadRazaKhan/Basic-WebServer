// WebServer by using HTTP Module
// Reuiring HTTP module
const http = require("http");

// Response
const server = http.createServer((req,res)=>{
    res.end("Hello World");
})

// Listening Request
server.listen(8000,"127.0.0.1",()=>{
    console.log("Listening to Port 8000");
});