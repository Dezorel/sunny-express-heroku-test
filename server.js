var express = require('express')
var path = require('path')
const history = require('connect-history-api-fallback')
var serveStatic = require('serve-static')
app = express()
app.use('/', serveStatic(path.join(__dirname, '/dist')))
app.use(history({
    disableDotRule: true,
    verbose: true
}))
var port = process.env.PORT || 8080
app.listen(port)
console.log('server started ' + port)