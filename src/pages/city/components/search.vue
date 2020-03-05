<template>
  <div>
    <div class="search">
      <input v-model="keyword" class="search-input" type="text" placeholder="输入城市名或拼音" />
    </div>

    <div class="search-content" ref="search" v-show="keyword">
      <ul>
       
       
        <li class="search-item border-bottom" v-for="item of list" :key="item.id" @click="handle(item.name)" >{{item.name}}</li>
      <li class="search-item border-bottom" v-show="has">
        没有找到数据
      </li>
      </ul>
    </div>
  </div>
</template>

<script>
import Bscroll from "better-scroll";
import {mapState,mapMutations } from "vuex"
export default {
  name: "search",
  props: {
    qList: Object
  },
  data() {
    return {
      keyword: "",
      list: [],
      timer: null
    };
  },
  computed:{

     //设置搜索内容 没有找到数据 没有找到 显示没有显示数据   下面有一个字一样的他们两个都要有
      has(){
        return !this.list.length
      }
  },

  //监听搜索   //实训监听  但不能太快
  watch: {
    keyword() {
      if (this.timer) {
        clearTimeout(this.timer);
      }
      this.timer = setTimeout(() => {

        //
        const result = [];
        //设置搜索内容 没有找到数据 没有找到 显示没有显示数据 
        if(!this.keyword){
          this.list=[]
          return
        }
        for (let i in this.qList) {
          this.qList[i].forEach(vlaue => {
            //从 name spell当中搜索内容
            console.log(vlaue);
            if (
              vlaue.name.indexOf(this.keyword) > -1 ||
              vlaue.spell.indexOf(this.keyword) > -1
            ) {
              result.push(vlaue);
            }
          });
        }

        this.list = result;
      }, 200);
    }
  },
   methods:{

    handle(city){
      // alert(city)
      // this.$store.dispatch("chanCtiy",city)
      // this.$store.commit("chanCtiyvalue",city)
      this.chanCtiyvalue(city)
      this.$router.push("/")
    },
    ...mapMutations(["chanCtiyvalue"])
  },
  mounted() {
    //搜索出来的内容实训滚动

    this.scroll = new Bscroll(this.$refs.search);
  }
};
</script>

<style lang="stylus" scoped>
@import '~styles/varibles.styl';

.search {
  height: 0.72rem;
  padding: 0 0.1rem;
  background: $bgColor;

  .search-input {
    box-sizing: border-box;
    width: 100%;
    height: 0.62rem;
    padding: 0 0.1rem;
    line-height: 0.62rem;
    text-align: center;
    border-radius: 0.06rem;
    color: #666;
  }
}

.search-content {
  overflow: hidden;
  position: absolute;
  top: 1.58rem;
  left: 0;
  right: 0;
  bottom: 0;
  background: #fff;
  z-index: 1;

  .search-item {
    line-height: 0.62rem;
    padding-left: 0.2rem;
    background: red;
    color: #666;
  }
}
</style>