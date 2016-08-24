var os = require('os')

module.exports = {
  outPath: './src/articles-index.json', // 输出路径及文件名
  system: os.platform(), // 系统类型
  maxLength: 1024 // 文章参数允许的最大字节数
}
