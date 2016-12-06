<template lang="jade">
  div.flex-center.mask(v-on:click="closeMask()")
    img(v-if="maskData.type === 'image'", v-bind:src='maskData.imgUrl', v-on:click.stop="")
</template>

<script>
  import { closeMask } from '../../vuex/actions'
  import jq from '$'

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
    },
    ready () {
      jq('.mask').on('wheel', function ({ originalEvent: event }) {
        let width = window.screen.width
        let imgWidth = Number(jq('.mask img').css('width').split('px')[0])
        if (event.deltaY > 0) {
          if (imgWidth * 100 / width > 30) jq('.mask img').css({ width: '-=40' })
        } else jq('.mask img').css({ width: '+=40' })
      })
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
