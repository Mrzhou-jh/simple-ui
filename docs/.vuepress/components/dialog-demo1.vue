<template>
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
</template>

<script>
import SDialog from "../../../src/components/dialog/Dialog.vue";
import SButton from "../../../src/components/button/Button.vue";
export default {
  name: "dialog-demo1",
  data() {
    return { visible: false };
  },
  components: {
    SDialog,
    SButton
  }
};
</script>

<style lang="scss" scoped>
</style>