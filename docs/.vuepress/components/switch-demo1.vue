<template>
  <s-switch name="agree" :ischecked.sync="ischecked" activecolor="#409eff" inactivecolor="#f56c6c"></s-switch>
</template>

<script>
import SSwitch from "../../../src/components/switch/Switch";

export default {
  name: "switch-demo1",
  data() {
    return { ischecked: true };
  },
  components: {
    SSwitch
  }
};
</script>

<style>
</style>