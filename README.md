# almon000.github.io.dev
github pages 开发环境， 采用vue-cli(webpack)搭建

## 初始化
- npm install

## 本地调试
- npm run dev

## build
- npm run build
- 将 dist 目录下的所有文件复制到你的 github pages 项目中，如我这里是almon000.github.io, 最好是直接对 dist 目录建立一个 git，然后关联到 github pages 项目。

使用cnpm的注意，里面有一个包 extract-text-webpack-plugin 最近同步有问题， 如果build报错，删除这个包并用npm重新安装到 --save-dev 位置
