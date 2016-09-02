module.exports () {
  return {
    damageNum: damage_num,
    card: card,
    cast () {
      // arguments[0] 施法者
      // arguments[1 ~ n] 技能释放目标
      let hero = [...arguments]
      for(let i in hero) {
        if (i === 0) continue
        hero[0].damage(danage_num, hero[i])
      }
    }
  }
}
