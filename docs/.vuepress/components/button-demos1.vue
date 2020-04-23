<template>
  <div>
    <s-button>按钮</s-button>
    <s-button disabled>按钮</s-button>
    <s-button round>按钮</s-button>
    <s-button svgicon="set">按钮</s-button>
    <s-button svgicon="set" round>按钮</s-button>
  </div>
</template>

<script>
import SButton from "../../../src/components/button/Button.vue";
export default {
  name: "button-demos1",
  components: {
    SButton
  }
};
</script>

<style>
</style>