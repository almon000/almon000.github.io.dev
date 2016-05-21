<template lang="jade">
  div {{{ post }}}

</template>

<script>
  import po from './articles/1.md'

  export default {
    components: { po },
    data () {
      return {
        post: po
      }
    },
    ready () {
      console.log(this.post)
    }
  }

</script>
