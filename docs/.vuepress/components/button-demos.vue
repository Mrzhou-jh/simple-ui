<template>
  <div>
    <s-button colortheme="primary">按钮</s-button>
    <s-button colortheme="success">按钮</s-button>
    <s-button colortheme="info">按钮</s-button>
    <s-button colortheme="warning">按钮</s-button>
    <s-button colortheme="danger">按钮</s-button>
    <br />
    <br />
    <s-button plain colortheme="primary">按钮</s-button>
    <s-button plain colortheme="success">按钮</s-button>
    <s-button plain colortheme="info">按钮</s-button>
    <s-button plain colortheme="warning">按钮</s-button>
    <s-button plain colortheme="danger">按钮</s-button>
    <br />
    <br />
    <s-button round colortheme="primary">按钮</s-button>
    <s-button round colortheme="success">按钮</s-button>
    <s-button round colortheme="info">按钮</s-button>
    <s-button round colortheme="warning">按钮</s-button>
    <s-button round colortheme="danger">按钮</s-button>
  </div>
</template>

<script>
import SButton from "../../../src/components/button/Button.vue";
export default {
  name: "button-demos",
  components: {
    SButton,
  },
};
</script>
<style lang="scss" scoped></style>
