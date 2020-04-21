<template>
  <div id="app">
    {{da}}
    <s-button svgicon="xiazai" :loading="loading2" @click="loading2 = !loading2" colortheme="danger">下载</s-button>
  </div>
</template>

<script>

import SButton from "./components/button/Button.vue";
import ss from './components/svgicon/SvgIcon.vue'
export default {
  name: 'App',
  data(){
    return {da:"hdsjkfhdsk"}
  },
  components: {
   SButton
  }
}
</script>

<style lang="scss">

</style>
