<template>
  <div>
    <ul>
      <p @click="huiuit" class="detail_black el-icon-arrow-left" >  </p>
       <img :src="list.imgUrl" alt="" >
     <p>
         {{list.title}}
     </p>
    </ul>

      <div class="baseinfo">
            <div class="baseinfo_pf">
                <ul>
                    <li>
                        <p><span class="basepf">4.9分</span>   很棒</p>
                        <span class="base_gd"> > </span>
                        <p>5155评论</p>
                        
                    </li>
                    <li>
                        <p>景点简介</p>
                        <span class="base_gd"> > </span>
                        <p>开放时间、贴士</p>
                    </li>
                </ul>
            </div>
            <div class="detail_base">
                <!-- <img src="../../assets/定位.png" alt="">  -->
                北京是到付款
                <span class="base_base_jt"> > </span>
            </div>
        </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "xqy",
  data(){
      
      return{
         list:[],
          jt:"<"
      }
  },
  
  mounted() {
    this.list = this.$route.query.item;
  },
  methods:{
     huiuit(){
            this.$router.go(-1)
        }
  }
  
};
</script>

<style lang="scss" scoped>

ul{
    width: 100%;
    img{
        width: 100%;
        height: 206px;
    
    }
    padding:5px 0 ;
}
.basepf{
    // width: 100%;
    color: orange;
    font-size: 17px;
    font-weight: 600;
    margin-right: 5px
}
.base_base_jt{
    float: right;
    margin-right: .4rem
}
.detail_base{
    width: 100%;
    line-height: 40px;
    padding-left: .2rem
}
.base_gd{
    float: right;
    margin-top: -.1rem;
    margin-right: .2rem
}
.baseinfo_pf ul li:nth-child(1){
    border-right:1px #c2c2c2 solid
}
.baseinfo_pf ul li p{
    line-height: 27px;
}
.baseinfo_pf ul li{
    width: 47%;
    height: 100%;
    float: left;
    padding-left: 10px
}
.baseinfo_pf{
    width: 100%;
    height: 56px;
    background: #fff
}
.baseinfo{
    width: 100%;
    height: 100px;
    border-top-right-radius: 5px;
    border-top-left-radius: 5px;
    margin-top: -5px;
    z-index: 999;
    position: relative;
}
.detail_black{
    width: 36px;
    height: 36px;
    background: rgba(36, 35, 35, 0.603);
    border-radius: 100%;
    text-align: center;
    line-height: 36px;
    position:absolute;
    top: 10px;
    left: 10px;
    color: #fff
}
.detail_title{
    position:absolute;
    bottom: .4rem;
    color: #fff;
    font-size: .4rem;
    left: .2rem;
    
}
.bannerimage img{
    width: 100%
}
.bannerimage{
    width: 100%;
    height: 206px;
    position: relative;
}
</style>