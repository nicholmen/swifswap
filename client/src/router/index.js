import Vue from 'vue'
import Router from 'vue-router'
import Register from '@/components/Register'
import Login from '@/components/Login'
import Chats from '@/components/Chats'
import Chat from '@/components/Chat'
import HomePage from '@/components/HomePage'
import Profile from '@/components/Profile'
import NewItem from '@/components/NewItem'
import Item from '@/components/Item'

Vue.use(Router)

const routes = [
  { path: '/', component: HomePage },
  { path: '/register', component: Register },
  { path: '/login', component: Login },
  { path: '/chats', component: Chats },
  { path: '/chats/:id', component: Chat },
  { path: '/newitem', component: NewItem },
  { path: '/items/:id', component: Item },
  { path: '/users/:id', component: Profile },
  { path: '/:username', component: Profile },
]


export default new Router({ 
  routes, 
  mode: 'history',
  scrollBehavior (to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    } else {
      return { x: 0, y: 0 }
    }
  } 
})
