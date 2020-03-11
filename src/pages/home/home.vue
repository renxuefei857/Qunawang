<template>
  <div>
    <HomeHeader></HomeHeader>
    <HomeTu :swi="swiperList"></HomeTu>
    <HomeList :nav="navList"></HomeList>
    <HomeRecommend :re="reList"></HomeRecommend>
    <HomeWeekend :ww="weekList"></HomeWeekend>
    <router-view></router-view>
  </div>
</template>

<script>
import HomeHeader from "./components/HomeHeader";
import HomeTu from "./components/homeTu";
import HomeList from "./components/HomeList";
import HomeRecommend from "./components/recommend";
import HomeWeekend from "./components/Weekend";
import axios from "axios";
import { mapState } from "vuex";
export default {
  name: "Home",
  components: {
    HomeHeader,
    HomeTu,
    HomeList,
    HomeRecommend,
    HomeWeekend
  },
  data() {
    return {
      // city:'',
      swiperList: [],
      navList: [],
      reList: [],
      weekList: []
    };
  },
  computed: {
    ...mapState(["city"])
  },
  methods: {
    getHome() {
      axios.get("/api/index.json?city=" + this.city).then(this.getHomeInfoSucc);
    },
    getHomeInfoSucc(res) {
      res = res.data;
      console.log(res.data);
      // if (res.ret && res.data) {

      // this.city = res.data.city
      this.swiperList = res.data.swiperList;
      this.navList = res.data.iconList;
      this.reList = res.data.recommendList;
      this.weekList = res.data.weekendList;
      // }
    }
  },
  mounted() {
    this.getHome();

    console.log("mounted");
  },
  activated() {
    console.log("activated");
  },


  // vue页面出去时vux存页面高度,再进来时回到原来高度
  beforeRouteLeave(to, from, next) { 
    this.scrollTop = document.documentElement.scrollTop || document.body.scrollTop; // 得到当前高
    this.$store.commit("top",this.scrollTop)
    next();
  },

  beforeRouteEnter(to, from, next) {
    next(vm=>{
      console.log(vm)
      document.documentElement.scrollTop=vm.scrollTop
      document.body.scrollTop=vm.scrollTop
    })
  }
  
}
</script>

<style lang="stylus" scoped></style>