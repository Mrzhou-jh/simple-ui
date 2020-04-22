# Popover 气泡

## click 方式

预览

<popover-demo></popover-demo>

示例代码

```html
<s-popover>
  <template slot="content">弹出内容</template>
  <s-button>click上方弹出</s-button>
</s-popover>
<s-popover position="bottom">
  <template slot="content">弹出内容</template>
  <s-button>click右方弹出</s-button>
</s-popover>
<s-popover position="left">
  <template slot="content">弹出内容</template>
  <s-button>click右方弹出</s-button>
</s-popover>
<s-popover position="right">
  <template slot="content">弹出内容</template>
  <s-button>click右方弹出</s-button>
</s-popover>
```

## hover 方式

预览

<popover-demo1></popover-demo1>

示例代码

```html
<s-popover trigger="hover">
  <template slot="content">弹出内容</template>
  <s-button>hover方弹出</s-button>
</s-popover>
<s-popover position="bottom" trigger="hover">
  <template slot="content">弹出内容</template>
  <s-button>hover方弹出</s-button>
</s-popover>
<s-popover position="left" trigger="hover">
  <template slot="content">弹出内容</template>
  <s-button>hover方弹出</s-button>
</s-popover>
<s-popover position="right" trigger="hover">
  <template slot="content">弹出内容</template>
  <s-button>hover右方弹出</s-button>
</s-popover>
```
