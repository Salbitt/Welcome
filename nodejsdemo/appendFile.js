var http = require('http')
var fs = require('fs')
http.createServer((req,res)=>{
    fs.appendFile('test.txt',' Jenny!',(e)=>{
        res.end()
        console.log('running')
    })
}).listen(2023)