<template>
  <s-switch name="agree" :ischecked.sync="ischecked"></s-switch>
</template>

<script>
import SSwitch from "../../../src/components/switch/Switch";

export default {
  name: "switch-demo",
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