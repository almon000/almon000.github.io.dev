var fs = require('fs')
var config = require('./config')

fs.readFile(config.outPath, function(err, data) {
  if (err) throw err
  fs.writeFile(config.outPath, '{\r\n' + data.slice(0, data.length - 3) + '\r\n}')
})
