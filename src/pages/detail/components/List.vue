<template>
  <div>
      <div class="item" v-for="(item,key) in list" :key="key">
          <div class="item-title border-bottom" >
              <span class="item-title-icon"></span>
              {{item.title}}
          </div>

            <div class="item-children" v-if="item.children">
                   <List :list="item.children"></List>
            </div>
      </div>
  </div>
</template>

<script>
export default {
  name: "List",
  props:{
      list:Array
  },
  data() {
    return {
    //   list: [
    //     {
    //       title: "成人票",
    //       children: [
    //         {
    //           title: "成人三馆联票",
    //           children: [
    //             {
    //               title: "成人三馆联票 - 某一连锁店销售",
    //               children: [
    //                 {
    //                   title: "第四级成人三馆联票 - 某第四级成人三馆联销售"
    //                 }
    //               ]
    //             }
    //           ]
    //         },
    //         {
    //           title: "成人五馆联票"
    //         }
    //       ]
    //     },
    //     {
    //       title: "学生票"
    //     },
    //     {
    //       title: "儿童票"
    //     },
    //     {
    //       title: "特惠票"
    //     }
    //   ]
    };
  }
};
</script>

<style lang="stylus" scoped>
.item-title-icon 
    position relative
    left:.06rem
    top:.06rem
    display: inline-block
    width .36rem
    height  .36rem
    background : url('//s.qunarzz.com/piao/image/touch/sight/detail.png') 0 -.45rem no-repeat
    margin-right :.1rem
    background-size :.4rem

.item-title 
    line-height :.8rem
    font-size: .31rem
    padding :0 .2rem
.item-children
    padding 0 0.3rem

</style>