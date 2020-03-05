<template>
  <div>
    <ul class="list">
      <!-- v-for="(item,index) in cities"  -->
      <!-- {{ index }} -->
      <li
        class="item"
        v-for="item in letters"
        :key="item"
        :ref="item"
        @click="handleLetterClick"
        @touchstart="handleTouchStart"
        @touchmove="handleTouchMove"
        @touchend="handleTouchEnd"
      >{{ item }}</li>
    </ul>
  </div>
</template>

<script>
export default {
  props: {
    qList: Object
  },
  data() {
    return {
      touchStatus: false,
      startY: 0,
      timer: null
    };
  },
  computed: {
    letters() {
      const letters = [];
      for (let i in this.qList) {
        letters.push(i);
      }
      return letters;
    }
  },
  methods: {
    handleLetterClick(e) {
      console.log(e.target.innerText);
      this.$emit("change", e.target.innerText); //发送
    },
    handleTouchStart() {
      this.touchStatus = true;
      // console.log("start")
    },
   handleTouchMove(e) {
      if (this.touchStatus) {
        if (this.timer) {
          clearTimeout(this.timer);
        }
        this.timer = setTimeout(() => {
          const touchY = e.touches[0].clientY - 79;
          console.log(touchY);
          // index触控位置的下标   20量为字符的高度
          const index = Math.floor((touchY - this.startY) / 20);
          console.log(index);
          if (index >= 0 && index < this.letters.length) {
            this.$emit("change", this.letters[index]);
          }
        },16);
      }
    },
    handleTouchEnd() {
      this.touchStatus = false;
      // console.log("end")
    }
  },
  updated() {
    this.startY = this.$refs["A"][0].offsetTop;
  }
};
</script>

<style lang="stylus" scoped>
@import '~styles/varibles.styl';

.list {
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: absolute;
  top: 1.58rem;
  right: 0;
  bottom: 0;
  width: 0.44rem;

  // background :red
  .item {
    line-height: 0.4rem;
    text-align: center;
    color: $bgColor;
  }
}
</style>