import Vue from 'vue'
import Router from 'vue-router'
import Home from "@/pages/Home/home"
import Search from "@/pages/Search/search"
import Player from "@/pages/Player/player"
import SongList from "@/pages/SongList/songlist"
Vue.use(Router)

export default new Router({
  linkActiveClass:"active",
  routes: [
    {
      path:'/',
      name:"Home",
      component:Home,
    },
    {
      path:'/search',
      name:'Search',
      component:Search
    },
    {
      path:'/player/:songid',
      name:'Player',
      component:Player,
      props:true
    },
    {
      path:'/songlist',
      name:SongList,
      component:SongList
    }
  ]
})
