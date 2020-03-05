<template>
  <div class="list" ref="wrapper">
    <div>
      <div class="area">
        <div class="title border-topbottom">当前城市</div>
        <div class="button-list">
          <div class="button-wrapper">
            <div class="button">

              <!-- vuex映射  -->
              {{this.currentCity}}
               <!-- // vuex正常使用 -->
              <!-- {{this.$store.state.city}} -->


            </div>
          </div>
        </div>
      </div>
      <div class="area">
        <div class="title border-topbottom">热门城市</div>
        <div class="button-list">
          <div class="button-wrapper" v-for="item in hotList" :key="item.id" @click="handle(item.name)">
            <div class="button">{{item.name}}</div>
          </div>
        </div>
      </div>
      <div class="area" v-for="(item,index) in qList"  :key="item.index" :ref="index">
        <div class="title border-topbottom" >{{index}}</div>
        <div class="item-list">
          <div class="item border-bottom" v-for="i in item" :key="i.id" @click="handle(i.name)">{{i.name}}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Bscroll from "better-scroll";
 import {mapState,mapMutations } from "vuex"
export default {
  computed:{

    //vuex映射
       ...mapState({
         currentCity:"city"
       })
    },
  props: {
      qList:Object,
      hotList:Array,
      letter:String
  },
  data() {
    return {};
  },
  methods:{

    handle(city){
      // alert(city)
   
        // vuex正常使用
      // this.$store.commit("chanCtiyvalue",city)

      //vuex映射
      this.chanCtiyvalue(city)
    }, 
     //vuex映射
    ...mapMutations(["chanCtiyvalue"])
  },
  mounted(){
      this.scroll = new Bscroll(this.$refs.wrapper);
  },
  
// 监听到传过来的字母发生变化就要改变
  watch:{
    letter()
    {
      console.log(this.letter)
		if (this.letter) {
			const element = this.$refs[this.letter][0]
			console.log(element)
			this.scroll.scrollToElement(element)
		}
    }
  }
};
</script>

<style lang="stylus" scoped>
@import '~styles/varibles.styl';

.border-topbottom {
  &:before {
    border-color: #ccc;
  }

  &:after {
    border-color: #ccc;
  }
}

.border-bottom {
  &:before {
    border-color: #ccc;
  }
}

.list {
  overflow: hidden;
  position: absolute;
  top: 1.58rem;
  left: 0;
  right: 0;
  bottom: 0;

  // background:red
  .title {
    line-height: 0.54rem;
    background: #eee;
    padding-left: 0.2rem;
    color: #666;
    font-size: 0.26rem;
  }

  .button-list {
    overflow: hidden;
    padding: 0.1rem 0.6rem 0.1rem 0.1rem;

    .button-wrapper {
      float: left;
      width: 33.33%;

      .button {
        margin: 0.1rem;
        padding: 0.1rem 0;
        text-align: center;
        border: 0.02rem solid #ccc;
        border-radius: 0.06rem;
      }
    }
  }

  .item-list {
    .item {
      line-height: 0.76rem;
      padding-left: 0.2rem;
    }
  }
}
</style>