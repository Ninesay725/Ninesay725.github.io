---
title: 用做参考语法和个人信息
date: 2020-04-15 00:58:59
tags: Markdown
category: 参考
mathjax: true
---

> Markdown 是一种轻量级标记语言，它允许人们使用易读易写的纯文本格式编写文档。
> Markdown 语言在 2004 由约翰·格鲁伯（英语：John Gruber）创建。
> Markdown 编写的文档可以导出 HTML 、Word、图像、PDF、Epub 等多种格式的文档。
> Markdown 编写的文档后缀为 `.md`, `.markdown`。

<!-- more -->

GitHub: https://github.com/Ninesay725
  E-Mail: mailto:lx993204681@gmail.com
  BiliBili: https://space.bilibili.com/13460959
  Weibo: https://weibo.com/yourname
  Zhihu: https://www.zhihu.com/people/li-xu-47-30-48

valine:
  enable: true
  app_id: Yxdy9X56EvcWWQeJBZjfR1vj-gzGzoHsz # APP ID
  app_key: KPkmw5C5MMMjqUepn3Cp15VS # APP KEY

# 标题
👆 看起来就像上面这个。Markdown 标题有两种格式。

## 使用 `=` 和 `-` 标记一级和二级标题
`=` 和 `-` 标记语法格式如下：
```markdown
我展示的是一级标题
=================

我展示的是二级标题
-----------------
```

## 使用 `#` 号标记
使用 `#` 号可表示 1-6 级标题，一级标题对应一个 `#` 号，二级标题对应两个 `#` 号，以此类推。
```markdown
# 一级标题
## 二级标题
### 三级标题
#### 四级标题
##### 五级标题
###### 六级标题
```

# 段落样式
Markdown 段落没有特殊的格式，直接编写文字就好，段落的换行是使用两个以上空格加上回车。
当然也可以在段落后面使用一个空行来表示重新开始一个段落。

## 字体
Markdown 可以使用以下几种字体：
> *斜体文本*
> **粗体文本**
> ***粗斜体文本***
```markdown
*斜体文本*
_斜体文本_

**粗体文本**
__粗体文本__

***粗斜体文本***
___粗斜体文本___
```

## 分隔线
可以在一行中用三个以上的星号、减号、底线来建立一个分隔线，行内不能有其他东西。
也可以在星号或是减号中间插入空格。下面每种写法都可以建立分隔线：
> - - -
> 我
> - - -
> 裂
> - - -
> 开
> - - -
> 了
>
> - - -
```markdown
***
* * *
*****
- - -
----------
```

## 删除线
如果段落上的文字要添加删除线，只需要在文字的两端加上两个波浪线 `~~` 即可，实例如下：
> RUNOOB.COM
> GOOGLE.COM
> ~~BAIDU.COM~~
```markdown
RUNOOB.COM
GOOGLE.COM
~~BAIDU.COM~~
```

## 下划线
下划线可以通过 HTML 的 `<u>` 标签来实现：
> <u>带下划线文本</u>
```html
<u>带下划线文本</u>
```

## 脚注
脚注是对文本的补充说明。Markdown 脚注的格式如下:
```markdown
[^要注明的文本]
```
以下实例演示了脚注的用法：
> 阿米娅[^阿米娅]
```markdown
创建脚注格式类似这样 [^阿米娅]
[^阿米娅]: 博士，您还有很多事情需要处理。现在还不能休息哦。
```

# Markdown 列表
Markdown 支持有序列表和无序列表。
无序列表使用星号(`*`)、加号(`+`)或是减号(`-`)作为列表标记：
> * 第一项
> * 第二项
> * 第三项
```markdown
* 第一项
* 第二项
* 第三项

+ 第一项
+ 第二项
+ 第三项

- 第一项
- 第二项
- 第三项
```
有序列表使用数字并加上 `.` 号来表示，如：
> 1. 第一项
> 2. 第二项
> 3. 第三项
```markdown
1. 第一项
2. 第二项
3. 第三项
```

## 列表嵌套
列表嵌套只需在子列表中的选项添加四个空格即可：
1. 第一项：
    - 第一项嵌套的第一个元素
    - 第一项嵌套的第二个元素
2. 第二项：
    - 第二项嵌套的第一个元素
    - 第二项嵌套的第二个元素


```markdown
1. 第一项：
    - 第一项嵌套的第一个元素
    - 第一项嵌套的第二个元素
2. 第二项：
    - 第二项嵌套的第一个元素
    - 第二项嵌套的第二个元素
```

# Markdown 区块
Markdown 区块引用是在段落开头使用 `>` 符号 ，然后后面紧跟一个空格符号：
> 这是一个区块
```markdown
> 这是一个区块
```
另外区块是可以嵌套的，一个 `>` 符号是最外层，两个 `>` 符号是第一层嵌套，以此类推：
> 最外层
> > 第一层嵌套
> >
> > > 第二层嵌套
```markdown
> 最外层
> > 第一层嵌套
> > > 第二层嵌套
```

## 区块中使用列表
区块中使用列表实例如下：
> 区块中使用列表
> 1. 第一项
> 2. 第二项
> + 第一项
> + 第二项
> + 第三项
```markdown
> 区块中使用列表
> 1. 第一项
> 2. 第二项
> + 第一项
> + 第二项
> + 第三项
```

## 列表中使用区块
如果要在列表项目内放进区块，那么就需要在 `>` 前添加四个空格的缩进。
区块中使用列表实例如下：
* 第一项
    > 菜鸟教程
    > 学的不仅是技术更是梦想
* 第二项
```markdown
* 第一项
    > 菜鸟教程
    > 学的不仅是技术更是梦想
* 第二项
```

# Markdown 代码
如果是段落上的一个函数或片段的代码可以用反引号把它包起来（\`），例如：
`printf()` 函数
```markdown
`printf()` 函数
```
## 代码区块
代码区块使用 4 个空格或者一个制表符（Tab 键）。
也可以用 ``` 包裹一段代码，并指定一种语言（也可以不指定）：
实例如下：
```javascript
$(document).ready(function () {
    alert('RUNOOB');
});
```

# Markdown 链接
链接使用方法如下：
> [链接名称](#链接地址)
> 或者直接使用链接地址
> <https://github.com/Yue-plus>
```markdown
[链接名称](链接地址)
<https://github.com/Yue-plus>
```

## 高级链接
可以通过变量来设置一个链接，变量赋值在文档末尾进行：
> 这个链接用 `1` 作为网址变量 [Google][1]
> 这个链接用 `mysite` 作为网址变量 [Yue_plus][mysite]
```markdown
这个链接用 1 作为网址变量 [Google][1]
这个链接用 mysite 作为网址变量 [Yue_plus][mysite]
然后在文档的结尾为变量赋值（网址）

  [1]: http://www.google.com/
  [mysite]: https://github.com/Yue-plus
```

# Markdown 图片
Markdown 图片语法格式如下：
```markdown
![alt 属性文本](图片地址)
![alt 属性文本](图片地址 "可选标题")
```
开头一个感叹号 !
接着一个方括号，里面放上图片的替代文字
接着一个英文括号，里面放上图片的网址，最后还可以用引号包住并加上选择性的 'title' 属性的文字。
> ![罗德岛集结](https://ak.hypergryph.com/upload/images/20190228/118078295785f64dac736c6ade50bb76.jpg "罗德岛集结")
```markdown
![罗德岛集结](https://ak.hypergryph.com/upload/images/20190228/118078295785f64dac736c6ade50bb76.jpg "罗德岛集结")
```
当然，你也可以像网址那样对图片网址使用变量:
```markdown
这个链接用 `2` 作为网址变量 [凯尔希][2].
然后在文档的结尾为变量赋值（网址）

[2]: https://ak.hypergryph.com/upload/images/20190228/143666074a406ecaa6cd4271dc7c5127.jpg
```
Markdown 还没有办法指定图片的高度与宽度，如果需要的话，也可以使用普通的 `<img>` 标签。
> <img src="https://ak.hypergryph.com/assets/index/images/ak/common/story/item_infected.png" width="200px">
```html
<img src="https://ak.hypergryph.com/assets/index/images/ak/common/story/item_infected.png" width="200px">
```

# Markdown 表格
Markdown 制作表格使用 `|` 来分隔不同的单元格，使用 `-` 来分隔表头和其他行。
语法格式如下：

| 表头   | 表头   |
| ------ | ------ |
| 单元格 | 单元格 |
| 单元格 | 单元格 |

```markdown
|  表头   | 表头  |
|  ----  | ----  |
| 单元格  | 单元格 |
| 单元格  | 单元格 |
```

可以设置表格的对齐方式：

`-:` 设置内容和标题栏居右对齐。
`:-` 设置内容和标题栏居左对齐。
`:-:` 设置内容和标题栏居中对齐。

| 左对齐 | 右对齐 | 居中对齐 |
| :-----| ----: | :----: |
| 单元格 | 单元格 | 单元格 |
| 单元格 | 单元格 | 单元格 |

# Markdown 高级技巧
##支持的 HTML 元素
不在 Markdown 涵盖范围之内的标签，都可以直接在文档里面用 HTML 撰写。
目前支持的 HTML 元素有：`<kbd>` `<b>` `<i>` `<em>` `<sup>` `<sub>` `<br>`等，如：
> 使用 <kbd>Ctrl</kbd>+<kbd>Alt</kbd>+<kbd>Del</kbd> 重启电脑
```markdown
使用 <kbd>Ctrl</kbd>+<kbd>Alt</kbd>+<kbd>Del</kbd> 重启电脑
```

## 转义
Markdown 使用了很多特殊符号来表示特定的意义，如果需要显示特定的符号则需要使用转义字符，Markdown 使用反斜杠转义特殊字符：
> \*\* 正常显示星号 \*\*
```markdown
**文本加粗** 
\*\* 正常显示星号 \*\*
```
Markdown 支持以下这些符号前面加上反斜杠来帮助插入普通的符号：
```markdown
\   反斜线
`   反引号
*   星号
_   下划线
{}  花括号
[]  方括号
()  小括号
#   井字号
+   加号
-   减号
.   英文句点
!   感叹号
```

## 数学公式
当需要在编辑器中插入数学公式时，可以使用两个美元符 $$ 包裹 TeX 或 LaTeX 格式的数学公式来实现。提交后，问答和文章页会根据需要加载 Mathjax 对数学公式进行渲染。如：


% 单行内联公式
% 注意需要两边带上 "`" ，且 "`" 与 "$" 之间不能有空格
`$\sigma$`

% 多行公式
$$
\begin{aligned}f(x) &= \sum_{i=1}^{\infty}{\frac{x}{2^i}} \\
&= x\end{aligned}
$$



## 支援主题开发

主题通过 [mermaid-js](https://mermaid-js.github.io/mermaid/#/)（[GitHub](https://github.com/mermaid-js/mermaid)）绘制各种图表。

支持：
- [流程图](https://mermaid-js.github.io/mermaid/#/flowchart)
- [序列图](https://mermaid-js.github.io/mermaid/#/sequenceDiagram)
- [类图](https://mermaid-js.github.io/mermaid/#/classDiagram)
- [状态图](https://mermaid-js.github.io/mermaid/#/stateDiagram)
- [实体关系图](https://mermaid-js.github.io/mermaid/#/entityRelationshipDiagram)
- [用户旅程图](https://mermaid-js.github.io/mermaid/#/user-journey)
- [甘特图](https://mermaid-js.github.io/mermaid/#/gantt)
- [指令图](http://mermaid-js.github.io/mermaid/diagrams-and-syntax-and-examples/directives.html)
- [饼图](https://mermaid-js.github.io/mermaid/#/pie)

> [关于写作那些事之快速上手 Mermaid 流程图](https://baijiahao.baidu.com/s?id=1666117882411053133)

## 流程图

> <div class="mermaid">
> graph LR
>     A[Hard edge] -->|Link text| B(Round edge)
>     B --> C{Decision}
>     C -->|One| D[Result one]
>     C -->|Two| E[Result two]
> </div>

```html
<div class="mermaid">
graph LR
    A[Hard edge] -->|Link text| B(Round edge)
    B --> C{Decision}
    C -->|One| D[Result one]
    C -->|Two| E[Result two]
</div>
```

## 序列图

> <div class="mermaid">
> sequenceDiagram
>     autonumber
>     Alice->>John: Hello John, how are you?
>     loop Healthcheck
>         John->>John: Fight against hypochondria
>     end
>     Note right of John: Rational thoughts!
>     John-->>Alice: Great!
>     John->>Bob: How about you?
>     Bob-->>John: Jolly good!
> </div>

```html
<div class="mermaid">
sequenceDiagram
    autonumber
    Alice->>John: Hello John, how are you?
    loop Healthcheck
        John->>John: Fight against hypochondria
    end
    Note right of John: Rational thoughts!
    John-->>Alice: Great!
    John->>Bob: How about you?
    Bob-->>John: Jolly good!
</div>
```

## 类图

> <div class="mermaid">
> classDiagram
> classA --|> classB : Inheritance
> classC --* classD : Composition
> classE --o classF : Aggregation
> classG --> classH : Association
> classI -- classJ : Link(Solid)
> classK ..> classL : Dependency
> classM ..|> classN : Realization
> classO .. classP : Link(Dashed)
> </div>

```html
<div class="mermaid">
classDiagram
classA --|> classB : Inheritance
classC --* classD : Composition
classE --o classF : Aggregation
classG --> classH : Association
classI -- classJ : Link(Solid)
classK ..> classL : Dependency
classM ..|> classN : Realization
classO .. classP : Link(Dashed)
</div>
```

## 状态图

> <div class="mermaid">
>     stateDiagram-v2
>         State1: The state with a note
>         note right of State1
>             Important information! You can write
>             notes.
>         end note
>         State1 --> State2
>         note left of State2 : This is the note to the left.
> </div>

```html
<div class="mermaid">
    stateDiagram-v2
        State1: The state with a note
        note right of State1
            Important information! You can write
            notes.
        end note
        State1 --> State2
        note left of State2 : This is the note to the left.
</div>
```

## 实体关系图

> <div class="mermaid">
> erDiagram
>     CUSTOMER ||--o{ ORDER : places
>     ORDER ||--|{ LINE-ITEM : contains
>     CUSTOMER }|..|{ DELIVERY-ADDRESS : uses
> </div>

```html
<div class="mermaid">
erDiagram
    CUSTOMER ||--o{ ORDER : places
    ORDER ||--|{ LINE-ITEM : contains
    CUSTOMER }|..|{ DELIVERY-ADDRESS : uses
</div>
```

## 用户旅程图

> <div class="mermaid">
> journey
>     title My working day
>     section Go to work
>       Make tea: 5: Me
>       Go upstairs: 3: Me
>       Do work: 1: Me, Cat
>     section Go home
>       Go downstairs: 5: Me
>       Sit down: 5: Me
> </div>

```html
<div class="mermaid">
journey
    title My working day
    section Go to work
      Make tea: 5: Me
      Go upstairs: 3: Me
      Do work: 1: Me, Cat
    section Go home
      Go downstairs: 5: Me
      Sit down: 5: Me
</div>
```

## 甘特图

> <div class="mermaid">
> gantt
>     title A Gantt Diagram
>     dateFormat  YYYY-MM-DD
>     section Section
>     A task           :a1, 2014-01-01, 30d
>     Another task     :after a1  , 20d
>     section Another
>     Task in sec      :2014-01-12  , 12d
>     another task      : 24d
> </div>

```html
gantt
    title A Gantt Diagram
    dateFormat  YYYY-MM-DD
    section Section
    A task           :a1, 2014-01-01, 30d
    Another task     :after a1  , 20d
    section Another
    Task in sec      :2014-01-12  , 12d
    another task      : 24d
</div>

```

## 指令图

> <div class="mermaid">
> %%{init: { 'logLevel': 'debug', 'theme': 'dark' } }%%
> sequenceDiagram
> %%{config: { 'fontFamily': 'Menlo', 'fontSize': 18, 'fontWeight': 400} }%%
> Alice->>Bob: Hi Bob
> Bob->>Alice: Hi Alice
> </div>

```html
<div class="mermaid">
%%{init: { 'logLevel': 'debug', 'theme': 'dark' } }%%
sequenceDiagram
%%{config: { 'fontFamily': 'Menlo', 'fontSize': 18, 'fontWeight': 400} }%%
Alice->>Bob: Hi Bob
Bob->>Alice: Hi Alice
</div>
```

## 饼图

> <div class="mermaid">
> pie
>     title Key elements in Product X
>     "Calcium" : 42.96
>     "Potassium" : 50.05
>     "Magnesium" : 10.01
>     "Iron" :  5
> </div>

```html
<div class="mermaid">
pie
    title Key elements in Product X
    "Calcium" : 42.96
    "Potassium" : 50.05
    "Magnesium" : 10.01
    "Iron" :  5
</div>
```