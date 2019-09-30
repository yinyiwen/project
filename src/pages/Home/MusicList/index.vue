<template>
    <div>
        <MusicListView :songlist="hot_song_list" title="热歌推荐"/>
        <MusicListView :songlist="new_song_list" title="新歌推荐"/>
        <MusicListView :songlist="rock_song_list" title="摇滚榜"/>
    </div>
</template>
<script>

import MusicListView from "../MusicListView"

export default {
    name:"MusicList",
    data(){
        return{
            hot_song_list:[],
            new_song_list:[],
            rock_song_list:[]
        }
    },
    components:{
        MusicListView
    },
    mounted() {
        /**
         * 新歌榜
         */
        this.$api.getMusicList({
            method:"baidu.ting.billboard.billList",
            type:1,
            size:6,
            offset:0
        }).then(res =>{
            this.hot_song_list = res.data.song_list
        })

        /**
         * 热歌榜
         */
        this.$api.getMusicList({
            method:"baidu.ting.billboard.billList",
            type:2,
            size:6,
            offset:0
        }).then(res =>{
            this.new_song_list = res.data.song_list
        })
        /**
            摇滚榜
         */
        this.$api.getMusicList({
            method:"baidu.ting.billboard.billList",
            type:11,
            size:3,
            offset:0
        }).then(res =>{
            this.rock_song_list = res.data.song_list
        })
    },
}
</script>