<template lang="jade">
  div.app
    navbar
    router-view
</template>

<script>
import navbar from './components/common/navbar.vue'
export default {
  components: { navbar }
}
</script>

<style lang="scss">
  @import './stylesheets/base';
  @import './stylesheets/global';

  div.app {
    width: 100%;
  }
</style>
