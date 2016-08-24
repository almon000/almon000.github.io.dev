// build时建立文章目录
var fs = require('fs')
var os = require('os')
var config = require('./config')
var travel = require('../../node_utils/file-travel')

console.log('Creating articles-index.json...')
fs.unlink(config.outPath, function() {
  travel('./src/components/articles', function (pathname) {
    console.log('Resolving ' + pathname + '...')
    fs.open(pathname, 'r', function(err, fd) {
      var buf = new Buffer(config.maxLength);
      fs.read(fd, buf, 0, buf.length, 0, function(err, bytes) {
        if(bytes > 0) {
          let str = buf.slice(0, bytes).toString()
          str = str.slice(str.indexOf('{'), str.lastIndexOf('}') + 1)
          str = str.substring(0, str.lastIndexOf('}') - 1).concat(",\r\n  \"mtime\": \"" + fs.statSync(pathname).mtime + "\"\r\n}")

          fs.open(config.outPath, 'a+', function (err, fd2) {
            let divider = config.system === 'win32' ? '\\' : '/'
            fs.write(fd2, '"' + pathname.slice(pathname.lastIndexOf(divider)+1, pathname.indexOf('.md')) + '": ' + str + ',\r\n', function () {
            })
          })
        }
      })
    })
  })
})
