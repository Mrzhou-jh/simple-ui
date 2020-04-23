<template>
  <div>
    <s-button plain colortheme="primary" @click="visible=true">点我显示对话框</s-button>
    <s-dialog :visible.sync="visible">
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
  name: "dialog-demo",
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