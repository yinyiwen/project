<template>
  <div class="search">
    <div class="input">
      <i class="iconfont icon-sousuo right"></i>
      <input type="text" placeholder="搜索" ref="input" @keydown="searchChange" class="searInput"/>
    </div>
      <div class="songContent" v-if="searchSongContent.length>0">
          <router-link  :to="'/player/'+item.song_id" v-for="(item,index) in searchSongContent" :key="index">
              <span>{{index+1}}.{{item.songname}}</span>
          </router-link>
      </div>
    <div class="searchBox"  v-else>
      <h3>热门搜索</h3>
      <div class="searchSong">
        <router-link
          :to="'/player/'+item.song_id"
          v-for="(item,index) in searchSong"
          :key="index"
          class="search_title"
        >
          <span>{{item.title}}</span>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "SearchView",
  props: {
    searchSong: {
      type: Array,
      default: "",
      required: true
    }
  },
  data() {
    return {
      searchContent: "",
      searchSongContent:[]
    };
    
  },
  mounted() {},
  methods: {
    searchChange(e) {
      if (e.keyCode == 13) {
        this.searchContent = this.$refs.input.value;
        console.log(this.searchContent);

        //搜索框获取接口
        this.$api
          .getMusicList({
            method: "baidu.ting.search.catalogSug",
            query: this.searchContent
          })
          .then(res => {
            this.searchSongContent=res.data.song
            console.log(this.searchSongContent)
          });
      }
    }
  }
};
</script>

<style scoped>
.search {
  width: 100%;
  margin: 0 auto;
  margin-top: 20px;
}
.input {
  height: 40px;
  width: 85%;
  border: 1px solid #666;
  margin: 0 auto;
  line-height: 40px;
  color: #333;
  font-weight: bold;
  background-color: #fff;
  border-radius: 20px;
  margin-bottom: 10px;
}

.searchBox {
  background: #fff;
  padding: 15px 15px 10px 15px;
  overflow: hidden;
}
.searchSong {
  margin: 10px;
}
.search_title span {
  float: left;
  margin: 5px;
  padding: 5px;
  border: 1px solid #666;
  border-radius: 20px;
}
.songContent{
    background-color: #fff;
    width: 100%;
    padding: 10px;
}
.songContent span{
    padding:5px;
    display: block;
}
</style>