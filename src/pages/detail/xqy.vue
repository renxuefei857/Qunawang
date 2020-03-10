<template>
  <div>
    <Banner 
     :sightName="sightName"
     :bannerImg="bannerImg" 
     :bannerImgs="gallaryImgs"></Banner>

    <Header></Header>
    <div class="content">
      <List :list="list"></List>
    </div>
  </div>
</template>

<script>
import Banner from "./components/Banner";
import Header from "./components/Header";
import List from "./components/List";

import axios from "axios";

export default {
  name: "xqy",
  components: {
    Banner,
    Header,
    List
  },
  data() {
    return {
      sightName: "",
      bannerImg: "",
      gallaryImgs: "",

      list: []
    };
  },
  methods: {
    getDetailInfo() {
      axios
        .get("/api/detail.json", {
          params: {
            id: this.$route.params.id
          }
        })
        .then(this.getDetailInfoSuss)
        .catch(function(e) {
          console.log(e);
        });
    },
    getDetailInfoSuss(res) {
      console.log(res);
      res = res.data;
      if (res.ret && res.data) {
        const data = res.data;
        this.sightName = data.sightName;
        this.bannerImg = data.bannerImg;
        this.gallaryImgs = data.gallaryImgs;
        this.list = data.categoryList;
        console.log(this.gallaryImgs);
      }
    }
  },
  mounted() {
    this.getDetailInfo();
  }
};
</script>

<style lang="stylus" scoped>
.content {
  height: 50rem;
}
</style>