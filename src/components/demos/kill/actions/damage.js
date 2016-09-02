import store from '../store'

module.exports = function (damageNum, target) {
  for (let i in store) {
    if (store[i].player === target) {
      store[i].life -= damageNum
      break
    }
  }
}
