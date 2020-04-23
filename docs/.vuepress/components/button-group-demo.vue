<template>
  <div>
    <s-button-group>
      <s-button svgicon="left-arrow" iconPosition="left" colortheme="primary">上一页</s-button>
      <s-button colortheme="primary">更多</s-button>
      <s-button svgicon="youjiantou" iconPosition="right" colortheme="primary">下一页</s-button>
    </s-button-group>
    <s-button-group>
      <s-button svgicon="left-arrow" iconPosition="left" colortheme="success">上一页</s-button>
      <s-button colortheme="success">更多</s-button>
      <s-button svgicon="right-arrow" iconPosition="right" colortheme="success">下一页</s-button>
    </s-button-group>
    <s-button-group>
      <s-button svgicon="left-arrow" iconPosition="left" colortheme="info">上一页</s-button>
      <s-button colortheme="info">更多</s-button>
      <s-button svgicon="right-arrow" iconPosition="right" colortheme="info">下一页</s-button>
    </s-button-group>
    <s-button-group>
      <s-button svgicon="left-arrow" iconPosition="left" colortheme="warning">上一页</s-button>
      <s-button colortheme="warning">更多</s-button>
      <s-button svgicon="right-arrow" iconPosition="right" colortheme="warning">下一页</s-button>
    </s-button-group>
    <s-button-group>
      <s-button svgicon="left-arrow" iconPosition="left" colortheme="danger">上一页</s-button>
      <s-button colortheme="danger">更多</s-button>
      <s-button svgicon="right-arrow" iconPosition="right" colortheme="danger">下一页</s-button>
    </s-button-group>
  </div>
</template>

<script>
import SButtonGroup from "../../../src/components/button/ButtonGroup.vue";
import SButton from "../../../src/components/button/Button.vue";
export default {
  name: "button-group-demo",
  data() {
    return { loading: false, loading2: false };
  },
  components: {
    SButton,
    SButtonGroup
  }
};
</script>

<style></style>
