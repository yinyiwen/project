<template>
    <div class="play" v-if="musicInfo.songinfo">
        <div class="header">
            <div class="title">
                <router-link to="/">
                    <i class="iconfont icon-shouye left"></i>
                </router-link>
                <div class="music-info">
                    <p>{{ musicInfo.songinfo.title }}</p>
                    <p class="author">{{ musicInfo.songinfo.author }}</p>
                </div>
                <router-link to="/search">
                    <i class="iconfont icon-sousuo right"></i>
                </router-link>
            </div>
        </div>
        <div class="song-info">
             <div class="song-info-img">
                <img :src="musicInfo.songinfo.pic_big" />
                <LRC :currentTime="currentTime" :duration="duration" :songid="songid"/>
            </div>
             <div class="iconbox">
                <i class="iconfont icon-shoucang2 left"></i>
                <i class="box"></i>
                <i class="iconfont icon-xiazai right"></i>
            </div>
        </div>
        <div class="song">
             <audio
                ref="player"
                :src="musicInfo.bitrate.file_link"
                controls  autoplay
            ></audio>
        </div>
    </div>
</template>
<script>
const LRC = () => import("../LRC")
export default {
    name:"Player",
    data(){
        return{
            musicInfo:{},
            currentTime:0,
            duration:0
        }
    },
    components:{
        LRC
    },
     mounted() {
        this.$api.getMusicList({
            method:"baidu.ting.song.play",
            songid:this.songid
        }).then(res =>{
            this.musicInfo = res.data
            this.$nextTick(() =>{
                this.addEventListenerHandler();
            })
        })
    },
    props:{
        songid:{
            type:[String,Number],
            required:true
        }
    },
     methods:{
        addEventListenerHandler(){
            // 当前实时播放的时间
            this.$refs.player.addEventListener("timeupdate",()=>{
                this.currentTime = this.$refs.player.currentTime;
            })
            // 获取播放总时间
            this.$refs.player.addEventListener("canplay",() =>{
                this.duration = this.$refs.player.duration
            })
        }
    }
}
</script>

<style scoped>
.header {
    padding: 15px;
}

.music-info {
    flex: 1;
    font-size: 20px;
}

.title {
    display: flex;
    text-align: center;
}

.left {
    font-size: 30px;
}

.ca {
    color: red;
}

.right {
    font-size: 30px;
}

.song-info {
    padding: 15px;
}

.song-info-img {
    text-align: center;
    height:400px;
}
.song-info-img img {
    width: 50%;
    border-radius: 5px;
    box-shadow: 0 0 10px 0 rgba(50, 50, 50, 0.31);
}

.song-lrc {
    margin-top: 10px;
    min-height: 50px;
}

.iconbox {
    display: flex;
    margin-top: 30px;
}

.iconbox .box {
    flex: 1;
}

.song {
    width: 100%;
    text-align: center;
}

.song audio {
    width: 80%;
}

.active {
    color: #222;
}

.author {
    font-size: 12px;
    color: #999;
}
</style>