
<template>
  <div>
    <div class="mp-group-title image-ready">
      <p>
        <img src="http://img1.qunarzz.com/piao/fusion/1711/16/bfbb9874e8f11402.png" alt />
        本周热门榜单
      </p>
    </div>

    <div class="lb">
      <ul>
        <li v-for="item in re" :key="item.id" @click="enterthe(item)">
          
          <img :src="item.imgUrl" alt />
          <div class="mp-hotsale-sight mp-ellipsis">{{item.title}}</div>
          <div class="mp-hotsale-price">
            <span class="mpg-price">
              ￥
              <em class="mpg-price-num">{{item.price}}</em>起
            </span>
          </div>
         
        </li>
      </ul>
    </div>
	
      <div class="div">
        <p>
          <img
            src="http://img1.qunarzz.com/piao/fusion/1711/89/ebc329f16c55bb02.png"
            alt
            class="aa"
          />
          猜你喜欢
        </p>
      </div>

	<router-link :to="'/xqy/'+item.id"  v-for="item in re" :key="item.id" tag="dl" >
  

  	<dl class="item border-bottom"  >     <!--@click="enterthe(item)" -->            
<dt>
          <img :src="item.imgUrl" alt />
        </dt>
        <!-- </router-link> -->
        <dd>
          <p class="mp-like-title mp-ellipsis">{{item.title}}</p>
          <p class="mp-like-comment">
            
            <span>5155条评论</span>
          </p>
          <p class="mp-like-price">
            <span class="mpg-price">
              ￥
              <em class="mpg-price-num">{{item.price}}</em>起
            </span>

            <span class="mp-like-address">{{item.address}}</span>
          </p>
          <div class="mp-like-feature">
            <span class="mp-ellipsis2">👍小伙伴们都收藏了，去看看吧~</span>
          </div>
        </dd>             
</dl>
  </router-link>


  
</div>
</template>

<script>
export default {
    name:"HomeRecommend",
    props:["re"],
    data(){
      return{
        
      }
    },
      methods:{
    // enterthe(item){
    //    this.$router.push({path:"/xqy", query:{item:item}}) 
    // }
  },

}
</script>

<style lang="scss" scoped>
.mp-group-title {
  margin-top: 0.2rem;
  background: white;
  position: relative;
  padding: 0.24rem 0 0.26rem;
  img {
    display: inline-block;
    overflow: hidden;
    width: 0.3rem;
    height: 0.3rem;
    margin-left: 0.2rem;
    vertical-align: top;
  }
  p {
    display: inline-block;
    margin-left: 0.08rem;
    height: 0.44rem;
    color: #212121;
    font-size: 0.32rem;
    line-height: 0.44rem;
  }
}

.lb {
  // height: 332px;
  width: 100%;
  background: white;
  // background: none !important;
  overflow-x: auto;

  ul {
    float: left;
    // padding: 0.2rem;
    overflow-x: scroll;
    white-space: nowrap;
    li {
      // width: 50%;
      list-style: none;
      position: relative;
      display: inline-block;
      //  padding: .06rem 0 .06rem;
      // width: 320px;
      //   padding: .06rem 0 .2rem;
      // width: 2rem;
      img {
        width: 80%;
        //  height: 70%;
        opacity: 1;
        padding-left: 0.3rem;
      }

      .mp-hotsale-sight {
        margin-top: 0.14rem;
        color: #212121;
        font-size: 0.26rem;
        line-height: 0.32rem;
        text-align: center;
      }
      .mp-hotsale-price {
        color: #616161;
        font-size: 0.24rem;
        line-height: 0.36rem;
        text-align: center;

        .mpg-price {
          color: #ff8300;
        }
        .mpg-price-num {
          font-size: 0.3rem;
        }
      }
    }
  }
}
.div {
  margin-top: 0.2rem;
  background: white;
  position: relative;
  padding: 0.24rem 0 0.26rem;
  .aa {
    display: inline-block;
    overflow: hidden;
    width: 0.3rem;
    height: 0.3rem;
    margin-left: 0.2rem;
    vertical-align: top;
  }
  p {
    display: inline-block;
    margin-left: 0.08rem;
    height: 0.44rem;
    color: #212121;
    font-size: 0.32rem;
    line-height: 0.44rem;
  }
}
dl {
  width: 100%;
  background: white;
  padding-top: 14px;
  padding-bottom: 0.1rem;
  display: flex;
  border-bottom: 1px solid #f0f5f8;
  dt {
    // width: 2rem;
    // height: 2rem;
    padding-bottom: 14px;
    padding-left: 14px;
    img {
      width: 100%;
    }
  }
  dd {
    width: 80%;
    padding-top: 10px;
    padding-left: 10px;
    .mp-like-title {
      margin-top: 0.26rem;
      height: 0.44rem;
      color: #212121;
      font-size: 0.32rem;
      line-height: 0.44rem;
    }
    .mp-like-comment {
      margin-top: 0.14rem;
      height: 0.34rem;
    }
  }
  .mp-like-price {
    position: relative;
    margin-top: 0.22rem;
    color: #616161;
    font-size: 0.24rem;
    line-height: 0.4rem;

    .mpg-price {
      color: #ff8300;
    }

    .mpg-price-num {
      font-size: 0.4rem;
    }
    .mp-like-address {
      position: absolute;
      right: 0.24rem;
      bottom: 0;
    }
  }

  .mp-like-feature {
    display: inline-block;
    margin-top: 0.48rem;
    margin-right: 0.24rem;
    background: #fff9f9;
    padding: 0.04rem 0.1rem;
    color: #f55;
    font-size: 0.24rem;
    line-height: 0.34rem;
    padding-bottom: 0;
  }
}
</style>