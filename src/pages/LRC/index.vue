<template>
    <div class="lrc">
        <div v-for="(item,key,index) in lrcData" :key="index">
            <!-- currentTime >当前key  currentTime < 下一次的key -->
            <p v-if="currentTime > allKeys[index-2] && currentTime < allKeys[index-1]">{{ item }}</p>
            <p v-if="currentTime > allKeys[index-1] && currentTime < allKeys[index]">{{ item }}</p>
            <p class="chock" v-if="currentTime > allKeys[index] && currentTime < allKeys[index+1]">{{ item }}</p>
            <p v-if="currentTime > allKeys[index+1] && currentTime < allKeys[index+2]">{{ item }}</p>
            <p v-if="currentTime > allKeys[index+2] && currentTime < allKeys[index+3]">{{ item }}</p>
            <p v-if="currentTime > allKeys[index+3] && currentTime < allKeys[index+4]">{{ item }}</p>
            <p v-if="currentTime > allKeys[index+4] && currentTime < allKeys[index+5]">{{ item }}</p>
            <p v-if="currentTime > allKeys[index+5] && currentTime < allKeys[index+6]">{{ item }}</p>
        </div>
    </div>
</template>
<script>
export default {
    name:"LRC",
    data(){
        return{
            lrcData:{},
            allKeys:[]
        }
    },
    props:{
        songid:{
            type:[String,Number],
            required:true
        },
        duration:{
            type:Number,
            default:0
        },
        currentTime:{
            type:Number,
            default:0
        }
    },
    methods:{
        getAllKeys(lrcArr){
            for(var key in lrcArr){
                this.allKeys.push(key);
            }
            console.log(this.allKeys);
            
        }
    },
    mounted() {
        this.$api.getMusicList({
            method:"baidu.ting.song.lry",
            songid:this.songid
        }).then(res =>{
            console.log(res.data);
            /**
             * 歌词的格式解析
             * [
             *  {
             *      [03:38.88]:海阔天空 -> 218:海阔天空
             *  },
             *  {
             *     219:海阔天空 1
             *  },
             * {
             *     220:海阔天空 2
             *  },
             * ]
             * 
             * [03:38.88] -> 218.88s
             */
            var lrcArr = {};
            var lyrics = res.data.lrcContent.split("\n");
            var reg = /\[\d*:\d*(\.|:)\d*]/g;
            for(var i = 0;i<lyrics.length;i++){
                var timeRegExpArr = lyrics[i].match(reg);
                if(!timeRegExpArr) continue;
                var t = timeRegExpArr[0];
                // 取出分  /\[\d*/i
                var min = Number(t.match( /\[\d*/i).toString().slice(1));
                var second =Number(t.match( /\:\d*/i).toString().slice(1));
                // 歌词文本
                var content = lyrics[i].replace(timeRegExpArr,"");
                var time = min * 60 + second;
                lrcArr[time] = content;
            }
            this.lrcData = lrcArr;
            this.getAllKeys(lrcArr);
        })
    },
}
</script>
<style scoped>
.lrc{
    padding-top: 20px;
}   
.chock{
    color:blueviolet
}
p{
    padding-top:10px;
}
</style>