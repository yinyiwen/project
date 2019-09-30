<template>
    <div>
        <HeadNav/>
        <SongListView :song_list="songlist" :hot_menu="hotmenu"/>
    </div>
</template>

<script>
import HeadNav from "../../components/HeadNav"
import SongListView from "./SongListView/songlistview"
export default {
    name:'SongList',
    data(){
        return{
            songlist:[],
            hotmenu:[]
        }
    },
    components:{
        HeadNav,
        SongListView
    },
    mounted() {
        //歌单
        this.$api.getSongList({
            limit:10,
            order:"new"
        }).then(res =>{
            // console.log(res.data.playlists);
            this.songlist=res.data.playlists
        }),
        //热门歌单
        this.$api.getmusicHotMenu().then(res =>{
            console.log(res.data.tags);
            this.hotmenu=res.data.tags
        })
     },
}
</script>