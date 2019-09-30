<template>
    <div>
        <div class="hot_songlist" v-for="(item,index) in hot_menu" :key="index.id">
            <span>{{item.name}}</span>
        </div>
        <div class="songlistBox" v-for="(item,index) in song_list" :key="index">
            <img :src="item.coverImgUrl" alt="">
            <p class="songlistTitle">{{item.name}}</p>
        </div>
    </div>
</template>

<script>
export default {
    name:'songlistview',
    props:{
        song_list:{
            type:[Array,Object],
            default:function(){
                return []
            },
        },
        hot_menu:{
            type:[Array,Object],
            default:function(){
                return []
            },
        }
    }
}
</script>

<style scoped>
.songlistBox{
    width:32%;
    height:180px;
    float: left;
    margin-left:5px;
    margin-top:10px;
}
.songlistBox img{
    width:100%;
    height:85%;
}
.songlistTitle{
    overflow: hidden;
    white-space:nowrap;
    text-overflow: ellipsis;
}
.hot_songlist{
    float: left;
    font-size:14px;
    margin-left:5px;
}
</style>