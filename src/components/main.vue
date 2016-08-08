<template lang="jade">
  div.main
    navbar
</template>

<script>
import navbar from './common/navbar.vue'
export default {
  components: { navbar }
}
</script>

<style lang="scss" scoped>
  @import '../stylesheets/base';

  .main {
    height: 100vh;
    width: 100vw;
    background-image: url('http://ob54s56n6.bkt.clouddn.com/almon-summer.jpg');
    background-repeat:no-repeat;
    background-size: cover;
  }
</style>
