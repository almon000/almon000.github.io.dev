<template lang="jade">
  div.kill-main.flex
    div.player.flex-column(v-for="player in playerList", id="{{ player.player }}")
      div.hero
        p.name {{ player.hero }}
        p.life 生命值： {{ player.life }}
        div.cards
          a(v-for="card in player.cards" v-on:click="dam(player.player)") {{ card === 'sha' ? '杀' : 0 }}
</template>
<script>
  import store from './store'
  import damage from './actions/damage'
  export default {
    data () {
      return {
        playerList: store
      }
    },
    methods: {
      dam (player) {
        damage(1, player)
      }
    }
  }
</script>
<style lang="scss" scoped>
  @import '../../../stylesheets/base';
  .kill-main {
    margin-top: 56px;
    width: 100vw;

    .player {
      flex-grow: 1;
    }

    #Tom {
      border: 1px solid red;
    }

    #Jerry {
      border: 1px solid blue;
      text-align: right;
    }
  }
</style>
