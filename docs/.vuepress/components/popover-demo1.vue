<template>
  <div>
   
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
  </div>
</template>

<script>
import SPopover from "../../../src/components/popover/Popover";
import SButton from "../../../src/components/button/Button.vue";
export default {
  name: "popover-demo1",
  components: {
    SPopover,
    SButton
  }
};
</script>

<style>
</style>