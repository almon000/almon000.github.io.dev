import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App'

Vue.use(VueRouter)

const router = new VueRouter({
  hashbang: false
})

router.map({
  '/': {
    component: require('./components/main')
  },
  '/post': {
    component: require('./components/post')
  },
  '/post/:article_id': {
    component: require('./components/article')
  },
  '/tag/:tag_name': {
    component: require('./components/tag')
  }
})

// 启动路由
router.start(App, '#app')
