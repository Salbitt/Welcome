var url = require('url')

var address = 'https://www.tutorialkart.com/nodejs/delete-a-file-in-nodejs-using-node-fs/'

var q = url.parse(address,true)

console.log(q.host)
console.log(q.hostname)
console.log(q.pathname)
console.log(q.query)
