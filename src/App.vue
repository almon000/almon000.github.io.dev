<template lang="jade">
  div
    navbar
    mask(v-if="maskState")
    router-view
</template>

<script>
  import navbar from './components/common/navbar.vue'
  import mask from './components/common/mask.vue'
  import store from './vuex/store'
  export default {
    store,
    components: { navbar, mask },
    data () {
      return {
      }
    },
    computed: {
      maskState () {
        // console.log(this.$store.state.maskData.type)
        return this.$store.state.maskState
      }
    }
  }
</script>

<style lang="scss">
  @import './stylesheets/base';
  @import './stylesheets/global';

  #app {
    width: 100%;
    height: 100vh;
    overflow: auto;
  }
</style>
