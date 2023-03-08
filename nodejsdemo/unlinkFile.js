var http = require('http')
var fs = require('fs')

http.createServer((req,res)=>{
    fs.unlink('test.txt',(e)=>{
        res.end()
        console.log('Program running')
    })
}).listen(2050)