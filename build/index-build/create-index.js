// build时建立文章目录
var fs = require('fs')
var path = require("path")
var config = require('./config')

function travel(dir, callback) {
  fs.readdirSync(dir).forEach(function (file) {
    var pathname = path.join(dir, file)
    if (fs.statSync(pathname).isDirectory()) {
      travel(pathname, callback)
    } else {
      callback(pathname)
    }
  })
}
fs.unlink(config.outPath, function() {
  travel('./src/components/articles', function (pathname) {
    fs.open(pathname, 'r', function(err, fd) {
      var buf = new Buffer(1024);
      fs.read(fd, buf, 0, buf.length, 0, function(err, bytes) {
        if(bytes > 0) {
          let str = buf.slice(0, bytes).toString()
          str = str.slice(str.indexOf('{'), str.indexOf('}') + 1)
          fs.open(config.outPath, 'a+', function (err, fd2) {
            fs.write(fd2, '"' + pathname.slice(pathname.lastIndexOf('/')+1, pathname.indexOf('.md')) + '": ' + str + ',\r\n', function () {
            })
          })
        }
      })
    })
  })
})
