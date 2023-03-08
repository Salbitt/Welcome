
var http = require('http')
var fs = require('fs')
http.createServer((req,res)=>{
    fs.writeFile('test.txt','Happy Birthday',(e)=>{
        res.write('New data in file')
        res.end()
        console.log('running')
    }
    )
}).listen(2004)