import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from '../components/login.vue'
import Home from '../components/Home.vue'
import Welcome from '../components/childe/Welcome.vue'
import UserList from '../components/childe/UserList.vue'

Vue.use(VueRouter)

const routes = [
      { path: '/', redirect: '/login' },
      { path: '/login', component: Login },
      {
            path: '/home',
            component: Home,
            redirect: '/welcome',
            children: [
                  { path: '/welcome', component: Welcome },
                  // 用户列表
                  { path: '/users', component: UserList },
                  // 角色列表
                  { path: '/roles', component: Welcome },
                  // 权限列表
                  { path: '/rights', component: Welcome },
                  // 商品列表
                  { path: '/goods', component: Welcome },
                  // 分类参数
                  { path: '/params', component: Welcome },
                  // 商品分类
                  { path: '/categories', component: Welcome },
                  // 订单列表
                  { path: '/orders', component: Welcome },
                  // 数据统计
                  { path: '/reports', component: Welcome }

            ]
      }
]

const router = new VueRouter({
      routes
})
// 挂载路由导航守卫
router.beforeEach((to, from, next) => {
      // to代表要访问的页面
      // from代表从哪里来
      // next是一个函数，表示放行 有两种使用方式，第一种是next()直接放行
      // 一种是next('要去的地方')
      if (to.path === '/login') return next()
      const tokens = window.sessionStorage.getItem('token')
      if (!tokens) return next('/login')
      next()
})

export default router
