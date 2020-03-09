<template>
  <div>
    <router-link to="/" tag="div" class="header-abs" v-show="showAbs">
      <!-- <div class="header-abs"> -->
      <div class="iconfont header-abs-icon">&#xe624;</div>
      <!-- </div> -->
    </router-link>

    <div class="header-fixed" v-show="!showAbs" :style="opacityStyle">
      <router-link to="/">
        <div class="iconfont header-fixed-icon">&#xe624;</div>
      </router-link>情页
    </div>
  </div>
</template>

<script>
export default {
  name: "Header",
  data() {
    return {
      showAbs: true,
      opacityStyle: {
        opactiy: 0
      }
    };
  },
  methods: {
    handleScroll() {
      console.log(document.body.scrollTop)
      const top = document.documentElement.scrollTop;
      if (top > 60) {
        let opactiy = top / 140;
        opactiy = opactiy > 1 ? 1 : opactiy;
        this.opacityStyle = { opactiy };

        this.showAbs = false;
      } else {
        this.showAbs = true;
      }
    }
  },
 activated() {   //      全局事件
      console.log('activated')

    //原生的时间绑定方法
    window.addEventListener("scroll", this.handleScroll);
  },

  //对全局事件解绑 页面将替换为新的页面的时候
  deactivated(){
      window.removeEventListener("scroll", this.handleScroll)
  }
};
</script>

<style lang="stylus" scoped>
@import '~styles/varibles.styl';

.header-abs {
  position: absolute;
  left: 0.2rem;
  top: 0.2rem;
  width: 0.8rem;
  height: 0.8rem;
  line-height: 0.8rem;
  border-radius: 0.4rem;
  text-align: center;
  background: rgba(0, 0, 0, 0.8);

  .header-abs-icon {
    color: #fff;
    font-size: 0.4rem;
  }
}

.header-fixed {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  height: $headerHeight;
  line-height: $headerHeight;
  text-align: center;
  color: #fff;
  background: $bgColor;
  font-size: 0.32rem;

  .header-fixed-icon {
    position: absolute;
    color: #fff;
    top: 0;
    left: 0;
    width: 0.64rem;
    text-align: center;
    font-size: 0.4rem;
  }
}
</style>