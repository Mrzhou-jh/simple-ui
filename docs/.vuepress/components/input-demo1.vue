<template>
  <div class="all">
    <s-input placeholder="输入提示" colortheme="primary" v-model="msg"></s-input>
    <p>vlaue:{{msg}}</p>
  </div>
</template>

<script>
import SInput from "../../../src/components/input/Input.vue";
export default {
  name: "input-demo1",
  data() {
    return { msg: "" };
  },
  components: {
    SInput
  }
};
</script>

<style lang='scss' scpued>
.all {
  display: flex;
  justify-content: flex-start;
  align-items: center;
  align-content: center;
  flex-wrap: wrap;
  margin-bottom: 10px;
}
.all > div {
  margin: 5px;
}
</style>