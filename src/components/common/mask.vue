<template lang="jade">
  div.flex-center.mask(v-on:click="closeMask()")
    img(v-if="maskData.type === 'image'", v-bind:src='maskData.imgUrl', v-on:click.stop="")
</template>

<script>
  import { closeMask } from '../../vuex/actions'

  export default {
    data () {
      return {
      }
    },
    computed: {
      maskData () { return this.$store.state.maskData }
    },
    vuex: {
      actions: {
        closeMask
      }
    }
  }
</script>
<style lang="scss" scoped>
  @import '../../stylesheets/base';
  .mask {
    position: fixed;
    left: 0;
    top: 0;
    width: 100vw;
    height: 100vh;
    background-color: rgba(53, 53, 53, .8);
    z-index: 999;

    img {
      width: 70%;
    }
  }
</style>
