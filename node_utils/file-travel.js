// 文件遍历方法
var fs = require('fs')
var path = require("path")

module.exports = function (dir, callback) {
  fs.readdirSync(dir).forEach(function (file) {
    var pathname = path.join(dir, file)
    if (fs.statSync(pathname).isDirectory()) {
      travel(pathname, callback)
    } else {
      callback(pathname)
    }
  })
}
