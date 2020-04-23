# Button 按钮

提供单个按钮和组合形式的按钮，按钮可以添加图标，设置图标的位置等。

## 主题按钮

预览

<button-demos></button-demos>

示例代码

```html
<s-button colortheme="primary">按钮</s-button>
<s-button colortheme="success">按钮</s-button>
<s-button colortheme="info">按钮</s-button>
<s-button colortheme="warning">按钮</s-button>
<s-button colortheme="danger">按钮</s-button>

<s-button plain colortheme="primary">按钮</s-button>
<s-button plain colortheme="success">按钮</s-button>
<s-button plain colortheme="info">按钮</s-button>
<s-button plain colortheme="warning">按钮</s-button>
<s-button plain colortheme="danger">按钮</s-button>

<s-button round colortheme="primary">按钮</s-button>
<s-button round colortheme="success">按钮</s-button>
<s-button round colortheme="info">按钮</s-button>
<s-button round colortheme="warning">按钮</s-button>
<s-button round colortheme="danger">按钮</s-button>
```

## 一般按钮

预览
<button-demos1></button-demos1>

示例代码

```html
<s-button>按钮</s-button>
<s-button disabled>按钮</s-button>
<s-button round>按钮</s-button>
<s-button svgicon="set">按钮</s-button>
<s-button svgicon="set" round>按钮</s-button>
```

## 图标按钮

预览
<button-icon-demos></button-icon-demos>

示例代码

```html
<s-button svgicon="set" iconPosition="right" colortheme="primary">设置</s-button>
<s-button svgicon="fabulous" colortheme="success">点赞</s-button>
<s-button svgicon="loading" iconPosition="right" :loading="true" colortheme="info">加载</s-button>
<s-button svgicon="upload" iconPosition="right"  @click="loading = !loading" :loading="loading" colortheme="warning">加载</s-button>
<s-button svgicon="download" :loading="loading2" @click="loading2 = !loading2" colortheme="danger">下载</s-button>
```
## 组合按钮

预览
<button-group-demo></button-group-demo>

示例代码

```html
<s-button-group>
    <s-button svgicon="left-arrow" iconPosition="left" colortheme="primary">上一页</s-button>
    <s-button colortheme="primary">更多</s-button>
    <s-button svgicon="right-arrow" iconPosition="right" colortheme="primary">下一页</s-button>
</s-button-group>
<s-button-group>
    <s-button svgicon="left-arrow" iconPosition="left" colortheme="success">上一页</s-button>
    <s-button colortheme="success">更多</s-button>
    <s-button svgicon="right-arrow" iconPosition="right" colortheme="success">下一页</s-button>
</s-button-group>
<s-button-group>
    <s-button svgicon="left-arrow" iconPosition="left" colortheme="info">上一页</s-button>
    <s-button colortheme="info">更多</s-button>
    <s-button svgicon="right-arrow" iconPosition="right" colortheme="info">下一页</s-button>
</s-button-group>
<s-button-group>
    <s-button svgicon="left-arrow" iconPosition="left" colortheme="warning">上一页</s-button>
    <s-button colortheme="warning">更多</s-button>
    <s-button svgicon="right-arrow" iconPosition="right" colortheme="warning">下一页</s-button>
</s-button-group>
<s-button-group>
    <s-button svgicon="left-arrow" iconPosition="left" colortheme="danger">上一页</s-button>
    <s-button colortheme="danger">更多</s-button>
    <s-button svgicon="right-arrow" iconPosition="right" colortheme="danger">下一页</s-button>
</s-button-group>
```
