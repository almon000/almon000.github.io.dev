<!--!
{
  "title": "Markdown 效果演示",
  "date": "2016-06-28",
  "class": "post",
  "tags": ["其它"],
  "img": {
    "url": "http://ob54s56n6.bkt.clouddn.com/markdown2.png",
    "position": ["50%"]
  }
}
-->

以下效果使用默认的文本样式和代码样式。

文本样式来自[简书](http://www.jianshu.com/). 文本样式文件位于项目目录``` src/stylesheets/md_styles ```

代码样式为[highlights.js的样式库](https://highlightjs.org/static/demo/)中的"Darkula"样式. 代码样式文件位于项目目录``` src/stylesheets/hljs_styles ```

## 标题
# h1
## h2
### h3
#### h4
##### h5
###### h6

## 区块引用
> 区块引用
>> 嵌套

## 链接
支持锚链接，锚链接对象需要用HTML语法。

为了兼容hashbang模式（例如github-page不支持HTML５模式下直接访问链接），锚链接是用js模拟的。

如果链接的目标是自己的其它页面，可以实现无刷新跳转。

这是一个 [回到主页](/)的链接

这是一个 [去百度](http://www.baidu.com/)的链接

这是一个 [到页面底端](#bottom)的链接

## 图片
![](http://ob54s56n6.bkt.clouddn.com/Konachan.com%20-%20207983%20sample.jpg)

也可以引用本地图片，使用相对路径即可，比如下图的Vue Logo

![](../../assets/img/logo.png)

如果你的空间有存储限制，还是尽量用图片链接比较好。

## 列表

无序列表
* 1
* 2
* 3

有序列表
1. 1
2. 2
3. 3

## 代码
行内代码

使用行内```inline```代码，就像```this```这样。行内代码没有样式

块级代码

``` javascript
function comparator(...rules) {
  return function(x, y) {
    let curRuleResult = 0
    rules.some(function(rule) {
      curRuleResult = rule(x, y) ? -1 : (rule(y, x) ? 1 : 0)
      if(curRuleResult !== 0) return true
      else return false
    })
    return curRuleResult
  }
}

let rule1 = (x, y) => (Math.abs(x) < Math.abs(y))
let rule2 = (x, y) => (x > y)
let result = [2, 3,-1, -3, 0, -108, 42, 10].sort(
comparator(rule2, rule1))
console.log(result)
```
## 表格

| Tables        | Are           | Cool  |
| ------------- |:-------------:| -----:|
| col 3 is      | right-aligned | $1600 |
| col 2 is      | centered      |   $12 |
| zebra stripes | are neat      |    $1 |

<p id="bottom">你来到了页面底端</a>
