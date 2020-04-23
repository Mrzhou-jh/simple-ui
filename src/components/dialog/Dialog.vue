<template>
  <div class="s-d-wrapper" v-if="visible" @click.self="close">
    <div class="s-dialog">
      <div class="s-d-header">
        <slot name="header">
          <span>{{title}}</span>
        </slot>
        <button @click.self="close">X</button>
      </div>
      <div class="s-d-body">
        <slot>
          <span>这是一段内容</span>
        </slot>
      </div>
      <div class="s-d-footer" v-if="$slots.footer">
        <slot name="footer"></slot>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "SDialog",
  props: {
    visible: {
      type: Boolean,
      default: false
    },
    title: {
      type: String,
      default: "提示"
    }
  },
  methods: {
    close() {
      this.$emit("update:visible", false);
    }
  }
};
</script>

<style lang='scss' scoped>
.s-d-wrapper {
  width: 100%;
  height: 100vh;
  background-color: rgba(134, 130, 130, 0.5);
  display: flex;
  flex-direction: column;
  align-items: center;
  .s-dialog {
    background-color: white;
    box-sizing: border-box;
    width: 50%;
    height: 200px;
    margin-top: 100px;
    display: flex;
    flex-direction: column;
    padding: 0 20px;
    button {
      background: transparent;
      border: none;
      outline: none;
      cursor: pointer;
      font-size: 16px;
    }
    .s-d-header {
      height: 50px;
      line-height: 50px;
      position: relative;
      button {
        position: absolute;
        top: 15px;
        right: 0px;
        padding: 0;
        width: 16px;
        height: 16px;
      }
    }
    .s-d-footer {
      height: 50px;
      line-height: 50px;
      text-align: end;
    }

    .s-d-body {
      flex: 1;
      display: flex;
      justify-content: center;
      align-items: center;
    }
  }
}
</style>