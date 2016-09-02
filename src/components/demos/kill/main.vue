<template lang="jade">
  div.kill-main.flex
    div.player.flex-column(v-for="player in playerList", class="{{ 'player' + $index }}")
      div.hero
        p.name {{ player.hero }}
        p.life 生命值： {{ player.life }}
        div.cards
          p(v-for="card in player.cards") {{ card === 'sha' ? '杀' : 0 }}
</template>
<script>
  export default {
    data () {
      return {
        playerList: [
          {
            player: 'Tom',
            hero: '张三',
            life: 4,
            cards: ['sha', 'sha', 'sha']
          },
          {
            player: 'Jerry',
            hero: '李四',
            life: 5,
            cards: ['sha', 'sha']
          }
        ]
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

    .player0 {
      border: 1px solid red;
    }

    .player1 {
      border: 1px solid blue;
      text-align: right;
    }
  }
</style>
