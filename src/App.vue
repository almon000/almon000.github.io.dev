<template lang="jade">
  div
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

  #app {
    width: 100%;
  }
</style>
