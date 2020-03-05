<template>
  <div>
	<div class="title">
		周末去哪儿
	</div>
	<ul class="mp-product-item">
		<li class="item border-bottom" v-for="item in ww" :key="item.id"  @click="enterthe(item)">               
			 <img :src="item.imgUrl" alt="">
     <div class="mp-product-info">
       <p class="product-name">{{item.title}}</p>
     <p class="product-desc">{{item.desc}}</p>
     </div>            
		</li>
	</ul>

  <div class="mp-price-desc-info el-icon-warning-outline ">票面价
  <span class=" mp-price-desc-highlight">是指通过景区指定窗口售卖的纸质门票上标注的价格</span>
  
</div>

<div class="foo">
  <ul>
    <li>机票</li>
    <li>酒店</li>
    <li>公寓</li>
    <li>更多</li>
  </ul>
</div>

<div class="foot">
  <ul>
    <li><a href="//touch.qunar.com/h5/user/login">登录</a></li>
    <li><a href="//touch.qunar.com/h5/user/usercenter">我的订单</a></li>
    <li><a href="//touch.qunar.com/h5/recent">最近浏览</a></li>
    <li><a href="//touch.qunar.com/h5/about">关于我们</a></li>
  </ul>
</div>

<div class="foote">
  <ul>
    <li class="foote-li"><a href="https://www.qunar.com/">触屏版</a></li>
    <li><a href="http://www.qunar.com/index.htm?from=mobile&amp;qn163=1">电脑版</a></li>
  </ul>
</div>

<div class="footer">
  <span>Qunar 京ICP备05021087<a class="qn_ml25" href="//touch.qunar.com/h5/feedback">意见反馈</a></span>
</div>
</div>
</template>

<script>
export default {
    name:"HomeWeekend",
    props:["ww"],
     data(){
      return{
        
      }
    },
      methods:{
    enterthe(item){
       this.$router.push({path:"/xqy", query:{item:item}}) 
    }
  },

}
</script>

<style lang="scss" scoped>
 .mp-product-item{
       position: relative;
    margin-bottom: .1rem;
    background: #fff;
    img{
      width: 100%;
    }
 }
 .mp-product-item .mp-product-info {
    position: relative;
    padding: .14rem .2rem .2rem .2rem;
}
.mp-product-item .product-name {
    overflow: hidden;
    padding-right: 1.4rem;
    color: #212121;
    font-size: .28rem;
    line-height: .48rem;
    white-space: nowrap;
    text-overflow: ellipsis;
}
.mp-product-item .product-desc {
    overflow: hidden;
    padding-right: 1.4rem;
    color: #616161;
    font-size: .24rem;
    line-height: .42rem;
    white-space: nowrap;
    text-overflow: ellipsis;
}
.mp-price-desc-info {
  width: 100%;
   text-align: center;
    font-size: 10px;
       background: white;
       padding: 10px 0;
}
.foo{
  width: 100%;
  height: 35px;
  // background: red;
 ul{
    display: flex;
   
    li{
      width: 25%;
      text-align: center;
      line-height: 35px;
    }
 }
}

.mp-modtitle{
   height: .8rem;
    padding-left: .26rem;
    line-height: .8rem;
    color: #212121;
}
 

.foot{
  width: 100%;
  height: 35px;
  // background: red;
 ul{
    display: flex;
    width: 100%;
     color: #00afc7;
      border-bottom: 1px solid #cacaca;
    li{
      width: 20%;
      text-align: center;
      line-height: 35px;
     
    }
 }
}
.foote{
  width: 100%;
  height: 35px;
  // background: red;
 ul{
    display: flex;
    width: 100%;
    
      border-bottom: 1px solid #cacaca;
     
    li{
      width: 50%;
      text-align: center;
      line-height: 35px;
     
    }
 }
}

.footer{
  width: 100%;
      color: #9e9e9e;
    text-align: center;
    font-size: 14px;
    padding: 10px;
  span{
    color: #000;
    .qn_ml25{
        color: #000;
    }
  }
}
</style>