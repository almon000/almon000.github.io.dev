import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App'

Vue.use(VueRouter)

const router = new VueRouter({
  history: true
})

router.map({
  '/': {
    component: require('./components/main')
  },
  '/article/1': {
    component: require('./components/article')
  }
})

// 启动路由
router.start(App, '#app')
