<template>
<div>
   
      <div class="banner" @click="handldBannerClick">
           
    <img
      class="banner-img"
      src="http://img1.qunarzz.com/sight/p0/201404/23/04b92c99462687fa1ba45c1b5ba4ad77.jpg_600x330_bf9c4904.jpg"
    />
    <div class="banner-info">
      <div class="banner-title">大连圣亚海洋世界(AAAA景区)</div>

      <div class="banner-number">
        <span class="iconfont banner-ico">&#xe632;</span>
        39
      </div>
    </div>
  </div>
   <CommonGallary :imgs="imgs" v-show="showGallart" @close="handleGallary"></CommonGallary>
</div>
</template>

<script>
import CommonGallary from "common/gallary/Gallary"
export default {
  name: "Banner",
  components:{
       CommonGallary,
  },
  data(){
      return{
          showGallart:false,
    imgs :[
           "http://img1.qunarzz.com/sight/p0/201404/23/04b92c99462687fa1ba45c1b5ba4ad77.jpg_800x800_70debc93.jpg",
              "http://img1.qunarzz.com/sight/p0/1709/76/7691528bc7d7ad3ca3.img.png_800x800_9ef05ee7.png"
         ],
         
      }
  },
  methods:{
      handldBannerClick(){
          this.showGallart=true
      },
      handleGallary(){
           this.showGallart=false
      },
       huiuit(){
            this.$router.go(-1)
        }
  }

};
</script>

<style lang="stylus" scoped>
.banner {
  position: relative;
  overflow: hidden;
  height: 0;
  padding-bottom: 55%;


  .banner-img {
    width: 100%;
  }

  .banner-info {
    position: absolute;
    display: flex;
    left: 0;
    right: 0;
    bottom: 0;
    line-height: 0.6rem;
    color: #fff;
    background-image: linear-gradient(top, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.8));

    .banner-title {
      flex: 1;
      font-size: 0.32rem;
      padding: 0 0.2rem;
    }

    .banner-number {
      height: 0.32rem;
      line-height: 0.32rem;
      margin-top: 0.14rem;
      // margin-left : auto
      border-radius: 0.2rem;
      background: rgba(0, 0, 0, 0.8);
      font-size: 0.24rem;

      .banner-ico {
        font-size: 0.24rem;
      }
    }
  }
}
</style>