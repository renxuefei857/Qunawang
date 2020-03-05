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
  methods: {
    getHome() {
     axios.get("/api/index.json")
		.then(this.getHomeInfoSucc)
    },
    getHomeInfoSucc(res){
		res = res.data
		console.log(res.data);
		// if (res.ret && res.data) {
			
			// this.city = res.data.city
			this.swiperList =  res.data.swiperList
			this.navList =  res.data.iconList
			this.reList =  res.data.recommendList
			this.weekList =  res.data.weekendList
		// }
	}
  },
  mounted() {
    this.getHome();
  }
};
</script>

<style lang="stylus" scoped></style>