<template>
  <div class="container" @click="handleGallary">
    <div class="wrapper">
      <swiper :options="swiperOption" >
        <!-- slides -->
        <swiper-slide v-for="(item,key) in imgs" :key="key">
          <img class="gallary-img" :src="item" />
        </swiper-slide>
        <!-- <swiper-slide>
            <img class="gallary-img" src="http://img1.qunarzz.com/sight/p0/1709/76/7691528bc7d7ad3ca3.img.png_800x800_9ef05ee7.png" alt="">
       </swiper-slide> -->
        <!-- Optional controls -->
        <div class="swiper-pagination" slot="pagination"></div>
      </swiper>
    </div>
  </div>
</template>

<script>
export default {
  name: "Gallary",
  props:{
      imgs:{
         type:Array,
        //  default(){
        //         return[

        //             "http://img1.qunarzz.com/sight/p0/201404/23/04b92c99462687fa1ba45c1b5ba4ad77.jpg_800x800_70debc93.jpg",
        //             "http://img1.qunarzz.com/sight/p0/1709/76/7691528bc7d7ad3ca3.img.png_800x800_9ef05ee7.png"
        //         ]
        //     }
      }
      
  },
  data() {
    return {
      swiperOption: {
        pagination:".swiper-pagination",
        paginationType:"fraction",
        observer:true,
        observeParents:true,
      },
    //   imgs :[
    //        "http://img1.qunarzz.com/sight/p0/201404/23/04b92c99462687fa1ba45c1b5ba4ad77.jpg_800x800_70debc93.jpg",
    //           "http://img1.qunarzz.com/sight/p0/1709/76/7691528bc7d7ad3ca3.img.png_800x800_9ef05ee7.png"
    //   ]

    }
  },
  methods:{
      handleGallary(){
          this.$emit("close")
      }
  }
};
</script>

<style lang="stylus" scoped>
    .container >>>.swiper-container 
        overflow inherit
    .container 
        display: flex
        flex-direction: column
        justify-content: center
        z-index: 99
        position: fixed
        left: 0
        right: 0
        top: 0
        bottom: 0
        background: #000

        .wrapper 
            height :0
            width :100%
            padding-bottom :100%
            .gallary-img
                 width :100%
            .swiper-pagination
                 color : #fff
                //  bottom :-1rem




</style>