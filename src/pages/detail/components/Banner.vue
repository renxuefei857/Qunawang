<template>
<div>
   
      <div class="banner" @click="handldBannerClick">
           
    <img
      class="banner-img"
      :src="bannerImg"
      />
    <div class="banner-info">
      <div class="banner-title">

        {{this.sightName}}
      </div>

      <div class="banner-number">
        <span class="iconfont banner-ico">&#xe632;</span>
        {{this.bannerImgs.length}}
      </div>
    </div>
  </div>
  <FadeAn>


    <CommonGallary 
    :imgs="bannerImgs" 
    v-show="showGallart" 
    @close="handleGallary"></CommonGallary>
  </FadeAn>
   
</div>
</template>

<script>
import CommonGallary from "common/gallary/Gallary"
import FadeAn from "common/fade/FadeAn"
// import FadeAn from "common/gallary/FadeAn"
export default {
  name: "Banner",
  props:{
    sightName:String,
    bannerImg:String,
    bannerImgs:Array,
  },
  components:{
       CommonGallary,
       FadeAn
  },
  data(){
      return{
          showGallart:false,

         
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