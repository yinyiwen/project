<template>
    <div>
        <HeadNav/>
        <MusicList/>
        <MySwiper :banners="banners"/>
        <MusicTabs/>
    </div>
</template>
<script>
import MusicList from "./MusicList"
import MySwiper from "../../components/MySwiper"
import MusicTabs from "./MusicTabs"
import HeadNav from "../../components/HeadNav"
export default {
    name:"Home",
    data(){
        return{
            banners:[
                require("../../assets/img/b1.jpg"),
                require("../../assets/img/b2.jpg"),
                require("../../assets/img/b3.jpg")
            ]
        }
    },
    components:{
        MusicList,
        MySwiper,
        MusicTabs,
        HeadNav
    }
}
</script>