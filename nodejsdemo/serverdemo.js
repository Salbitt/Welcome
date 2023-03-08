var http = require('http')

    http.createServer(
        function(req,res){
         
            res.write('Hello World')
            res.end()
            console.log('program running')
        
        }
    ).listen(2000)