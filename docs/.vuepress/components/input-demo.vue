<template>
  <div class="all">
    <s-input placeholder="输入提示"></s-input>
    <s-input placeholder="禁用输入框" disabled></s-input>
    <s-input placeholder="输入提示" colortheme="primary"></s-input>
    <s-input placeholder="输入提示" colortheme="success"></s-input>
    <s-input value="默认文本" colortheme="warning"></s-input>
    <s-input value="小1" error="用户名不足两个汉字" colortheme="danger"></s-input>
  </div>
</template>

<script>
import SInput from "../../../src/components/input/Input.vue";
export default {
  name: "input-demo",
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