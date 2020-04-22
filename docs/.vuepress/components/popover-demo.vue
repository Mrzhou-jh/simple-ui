<template>
  <div>
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
    <br />
   
  </div>
</template>

<script>
import SPopover from "../../../src/components/popover/Popover";
import SButton from "../../../src/components/button/Button.vue";
export default {
  name: "popover-demo",
  components: {
    SPopover,
    SButton
  }
};
</script>

<style>
</style>