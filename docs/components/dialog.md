# dialog 对话框

## 默认对话框

预览

<dialog-demo></dialog-demo>

代码

```html
<s-button plain colortheme="primary" @click="visible=true">点我显示对话框</s-button>
<s-dialog :visible.sync="visible">
  <template slot="footer">
    <s-button plain colortheme="primary" @click="visible=false">取消</s-button>
    <s-button colortheme="primary" @click="visible=false">确定</s-button>
  </template>
</s-dialog>
```

## 自定义内容对话框

预览

<dialog-demo1></dialog-demo1>

代码

```html
<div>
  <s-button plain colortheme="primary" @click="visible=true">点我显示对话框</s-button>
  <s-dialog :visible.sync="visible" title="提示信息">
    <span>自定义显示内容</span>
    <template slot="footer">
      <s-button plain colortheme="primary" @click="visible=false">取消</s-button>
      <s-button colortheme="primary" @click="visible=false">确定</s-button>
    </template>
  </s-dialog>
</div>
```
