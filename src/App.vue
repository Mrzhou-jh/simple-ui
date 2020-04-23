<template>
  <div id="app">
    <s-dialog :visible.sync="visible"></s-dialog>
  </div>
</template>

<script>
import SDialog from "./components/dialog/Dialog.vue";
export default {
  name: "App",
  data() {
    return { visible: true };
  },
  components: {
    SDialog
  }
};
</script>

<style lang="scss">
</style>
