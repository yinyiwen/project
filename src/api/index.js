import axios from "../utils/http"
import base from "./base"

const api = {
    getMusicList(params){
        return axios.get(base.baseUrl + base.music,{
            params:params
        })
    },
    getSongList(params){
        return axios.get(base.musiclistUrl+base.musichotlist,{
            params:params
        })
    },
    getmusicHotMenu(){
        return axios.get(base.musiclistUrl+base.musicHotMenu)
    }
}


export default api