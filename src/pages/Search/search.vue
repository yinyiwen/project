<template>
    <div>
        <HeadNav/>
        <SearchView :searchSong="search_Song" />
    </div>
</template>

<script>
import HeadNav from "../../components/HeadNav";
import SearchView from "./SearchView/SearchView"
export default {
    components:{
        HeadNav,
        SearchView
    },
    data(){
        return{
            search_Song:[]
        }
    },
     mounted() {
        /**
         * 搜索推荐
         */
        this.$api.getMusicList({
            method:"baidu.ting.song.getRecommandSongList",
            song_id:876666,
            num:7
        }).then(res =>{
            // console.log(res.data.result.list);
            this.search_Song=res.data.result.list
        })
     },
    name:"search"
}
</script>

 