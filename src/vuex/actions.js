module.exports = {
  openMask (store, data) {
    store.dispatch('CHANGEMASKSTATE', true)
    store.dispatch('CHANGEMASKDATA', data)
  },
  closeMask (store) {
    store.dispatch('CHANGEMASKSTATE', false)
    store.dispatch('CHANGEMASKDATA', {})
  }
}
