<template>
  <div>
    <s-button svgicon="shezhi" iconPosition="right" colortheme="primary">设置</s-button>
    <s-button svgicon="zan" colortheme="success">点赞</s-button>
    <s-button svgicon="jiazai" iconPosition="right" :loading="true" colortheme="info">加载</s-button>
    <s-button
      svgicon="shangchuan"
      iconPosition="right"
      @click="loading = !loading"
      :loading="loading"
      colortheme="warning"
      >加载</s-button
    >
    <s-button svgicon="xiazai" :loading="loading2" @click="loading2 = !loading2" colortheme="danger">下载</s-button>
  </div>
</template>

<script>
import SButton from "../../../src/components/button/Button.vue";
export default {
  name: "button-icon-demos",
  data() {
    return { loading: false, loading2: false };
  },
  components: {
    SButton,
  },
};
</script>

<style></style>
