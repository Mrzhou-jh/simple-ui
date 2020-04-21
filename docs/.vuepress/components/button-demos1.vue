<template>
  <div>
    <s-button>按钮</s-button>
    <s-button disabled>按钮</s-button>
    <s-button round>按钮</s-button>
    <s-button svgicon="shezhi">按钮</s-button>
    <s-button svgicon="shezhi" round>按钮</s-button>
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