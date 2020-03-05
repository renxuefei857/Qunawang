<template>
  <div class="box">
    <swiper :options="swiperOption" v-if="swi.length">
      <!-- slides -->
      <swiper-slide v-for="(item,key) in swi" :key="key" v-if="showSwiper">
        <img class="swiper-img" :src="item.imgUrl" />
      </swiper-slide>

      <!-- Optional controls -->
      <div class="swiper-pagination" slot="pagination"></div>
    </swiper>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "HomeTu",
  props: ["swi"],
  data() {
    return {
      swiperOption: {
        loop: true,
        pagination: ".swiper-pagination"
      }
    };
  },
  computed: {
    showSwiper() {
      return this.swi.length;
    }
  }
};
</script>

<style lang="stylus" scoped>
@import '../../../assets/styles/varibles.styl';

.box {
  overflow: hidden;
  width: 100%;
  height: 0;
  padding-bottom: 31.25%;

  img {
    height: 210%;
    width: 100%;
  }
}
</style>