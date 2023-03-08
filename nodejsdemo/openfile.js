var http = require('http')

var fs = require('fs')

var server = http.createServer(function(req,res){
  fs.open('text.txt','w',function(err,data){
    res.write('Write in file')
    res.end()
    console.log('running')
  })
})

server.listen(2021)