<template>
  <transition name="fade">
    <div class="s-d-wrapper" v-if="visible" @click.self="close">
      <div class="s-dialog">
        <div class="s-d-header">
          <slot name="header">
            <span>{{title}}</span>
          </slot>
          <button @click="close">
            <s-svg-icon iconname="close"></s-svg-icon>
          </button>
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
  </transition>
</template>

<script>
import SSvgIcon from "../svgicon/SvgIcon.vue";
export default {
  name: "SDialog",
  components: {
    SSvgIcon
  },
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
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}
.s-d-wrapper {
  width: 100%;
  height: 100vh;
  background-color: rgba(134, 130, 130, 0.5);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  z-index: 100;
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  overflow: auto;
  .s-dialog {
    background-color: white;
    box-sizing: border-box;
    min-width: 400px;
    min-height: 200px;
    display: flex;
    flex-direction: column;
    padding: 0 20px;

    .s-d-header {
      height: 50px;
      line-height: 50px;
      position: relative;
      button {
        background: transparent;
        border: none;
        outline: none;
        cursor: pointer;
        font-size: 16px;
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