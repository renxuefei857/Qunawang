<template>
  <div>
    <div class="List">
      <swiper :options="swiperOption">
        <swiper-slide v-for="(page,index) in pages" :key="index">
          <div class="icon" v-for="item in page" :key="item.id">
            <div class="icon-img">
              <img class="icon-img-content" :src="item.imgUrl" />
            </div>
            <p class="icon-desc">{{item.desc}}</p>
          </div>
        </swiper-slide>
        <div class="swiper-pagination"  slot="pagination"></div>
      </swiper>
    </div>
    <div class="bot">
      <div class="left">
        <span>定位失败</span>
      </div>
      <div class="right">
        <span>必有榜单</span>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "HomeList",
  props:["nav"],
  data() {
    return {
      list: [],
      swiperOption:{
          autoplay:false,
          pagination: '.swiper-pagination'
      }
    };
  },
  computed: {
    pages() {
      const pages = [];
      this.nav.forEach((item, index) => {
        //page当前下标的数据应该展示在轮播图的第几页   index是3 下标是2  Math.floor(2/8)向下取整为0  Math.floor(8/8)向下取整为1
        const page = Math.floor(index / 8);
        if (!pages[page]) {
          pages[page] = [];
        }
        pages[page].push(item);
      });
      return pages;
    }
  }
};
</script>

<style lang="stylus" scoped>
@import '../../../assets/styles/varibles.styl';

.icons >>> .swiper-container {
  height: 0;
  padding-bottom: 50%;
}

.icon {
  position: relative;
  overflow: hidden;
  float: left;
  width: 25%;
  height: 0;
  padding-bottom: 25%;

  // background : red
  .icon-img {
    position: absolute;
    top: 0.14rem;
    left: 0;
    right: 0;
    bottom: 0.44rem;
    box-sizing: border-box;
    padding: 0.05rem;

    .icon-img-content {
      display: block;
      margin: 0 auto;
      height: 100%;
      border-radius: 50%;
    }
  }

  .icon-desc {
    position: absolute;
    left: 0;
    right: 0;
    bottom: 0;
    height: 0.44rem;
    line-height: 0.44rem;
    text-align: center;
    color: #333;
  }
}

.bot {
  width: 99.5%;
  height: 1rem;
  display: flex;
  text-align: center;
  line-height: 1rem;
  background: white;

  .left {
    width: 50%;
    height: 100%;
    border: 1px solid #f5f5f5;
  }

  .right {
    width: 50%;
    height: 100%;
    border: 1px solid #f5f5f5;
  }
}
</style>