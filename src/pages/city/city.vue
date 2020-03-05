<template>
  <div>
    <CityHeader></CityHeader>
    <CitySearch  :qList="qList"></CitySearch>
    <CityList :hotList="hotList" :qList="qList" :letter="letter"></CityList>
    <Alphabet :qList="qList" @change="handleLetterChange"></Alphabet>
  </div>
</template>

<script>
import CityHeader from "./components/cityHeader"
import CitySearch from "./components/search"
import CityList from "./components/cityList"
import Alphabet from "./components/Alphabet"
import axios from "axios"
export default {
  components:{
    CityHeader,
    CitySearch,
    CityList,
    Alphabet
  },
    data(){
        return{
          hotList:[],
          qList:{},
          letter:""
        }
    },
    mounted() {
    
    axios.get("/api/city.json").then((res)=>{
        console.log(res.data.data)
        this.hotList=res.data.data.hotCities
        this.qList=res.data.data.cities
    })
  
    
  },

  methods:{
      handleLetterChange(data){
      // console.log(data)
      this.letter=data

    }
  }

};
</script>
<style lang="stylus" scoped>
</style>