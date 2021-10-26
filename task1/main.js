const http = require('http')
const fs = require('fs')
const index = fs.readFileSync('index.html')

const server = http.createServer((req, res)=>{
    res.writeHead(200,{'Content-type' : 'text/html'});
    res.end(index)
})

server.listen(80, '127.0.0.1', ()=>{
    console.log("Successful")
})