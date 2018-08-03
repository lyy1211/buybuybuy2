<template>
    <div>
        <div class="section">
            <div class="location">
                <span>当前位置：</span>
                <a href="/index.html">首页</a> &gt;
                <a href="/goods.html">购物商城</a> &gt;
                <a href="/goods/42/1.html">商品详情</a>
            </div>
        </div>
        <div class="section">
            <div class="wrapper clearfix">
                <div class="wrap-box">
                    <div class="left-925">
                        <div class="goods-box clearfix">
                            <div class="pic-box" v-if="this.images.normal_size.length!=0">
                                <ProductZoomer :base-images="images"
                                    :base-zoomer-options="zoomerOptions"
                                ></ProductZoomer>
                            </div>
                            <div class="goods-spec">
                                <h1>{{goodsinfo.title}}</h1>
                                <p class="subtitle">{{goodsinfo.sub_title}}</p>
                                <div class="spec-box">
                                    <dl>
                                        <dt>货号</dt>
                                        <dd id="commodityGoodsNo">{{goodsinfo.goods_no}}</dd>
                                    </dl>
                                    <dl>
                                        <dt>市场价</dt>
                                        <dd>
                                            <s id="commodityMarketPrice">¥{{goodsinfo.market_price}}</s>
                                        </dd>
                                    </dl>
                                    <dl>
                                        <dt>销售价</dt>
                                        <dd>
                                            <em id="commoditySellPrice" class="price">¥{{goodsinfo.sell_price}}</em>
                                        </dd>
                                    </dl>
                                </div>
                                <div class="spec-box">
                                    <dl>
                                        <dt>购买数量</dt>
                                        <dd>
                                            <div class="stock-box">
                                                <div class="el-input-number el-input-number--small">
                                                    <span @click="num==1?1:num--" role="button" class="el-input-number__decrease" :class="{'is-disabled':num==1}">
                                                        <i class="el-icon-minus"></i>
                                                    </span>
                                                    <span role="button" @click="num==goodsinfo.stock_quantity?goodsinfo.stock_quantity:num++" class="el-input-number__increase" :class="{'is-disabled':num==goodsinfo.stock_quantity}">
                                                        <i class="el-icon-plus"></i>
                                                    </span>
                                                    <div class="el-input el-input--small">
                                                        <!---->
                                                        <input autocomplete="off" v-model="num" size="small" type="text" rows="2" :max="goodsinfo.stock_quantity" min="1" validateevent="true" class="el-input__inner"
                                                            role="spinbutton" aria-valuemax="60" aria-valuemin="1" aria-valuenow="1"
                                                            aria-disabled="false">
                                                        <!---->
                                                        <!---->
                                                        <!---->
                                                    </div>
                                                </div>
                                            </div>
                                            <span class="stock-txt">
                                                库存
                                                <em id="commodityStockNum">{{goodsinfo.stock_quantity}}</em>件
                                            </span>
                                        </dd>
                                    </dl>
                                    <dl>
                                        <dd>
                                            <div id="buyButton" class="btn-buy">
                                                <button onclick="cartAdd(this,'/',1,'/shopping.html');" class="buy">立即购买</button>
                                                <button @click="cartAdd" class="add">加入购物车</button>
                                            </div>
                                        </dd>
                                    </dl>
                                </div>
                            </div>
                        </div>
                        <div id="goodsTabs" class="goods-tab bg-wrap">
                            <Affix>
                                <div id="tabHead" class="tab-head" style="position: static; top: 517px; width: 925px;">
                                    <ul>
                                        <li>
                                            <a @click="isShowintro=true" href="javascript:;" :class="{selected:isShowintro}">商品介绍</a>
                                        </li>
                                        <li>
                                            <a @click="isShowintro=false" href="javascript:;" :class="{selected:!isShowintro}">商品评论</a>
                                        </li>
                                    </ul>
                                </div>
                            </Affix>
                            <div v-html="goodsinfo.content" class="tab-content entry" :style="{display:isShowintro?'block':'none'}">
                            
                            </div>
                            <div class="tab-content" :style="{display:!isShowintro?'block':'none'}">
                                <div class="comment-box">
                                    <div id="commentForm" name="commentForm" class="form-box">
                                        <div class="avatar-box">
                                            <i class="iconfont icon-user-full"></i>
                                        </div>
                                        <div class="conn-box">
                                            <div class="editor">
                                                <textarea v-model.trim="mess" id="txtContent" name="txtContent" sucmsg=" " datatype="*10-1000" nullmsg="请填写评论内容！"></textarea>
                                                <span class="Validform_checktip"></span>
                                            </div>
                                            <div class="subcon">
                                                <input id="btnSubmit" @click="submitcomment" name="submit" type="submit" value="提交评论" class="submit">
                                                <span class="Validform_checktip"></span>
                                            </div>
                                        </div>
                                    </div>
                                    <ul id="commentList" class="list-box">
                                        <p  v-if="commentslist.length==0" style="margin: 5px 0px 15px 69px; line-height: 42px; text-align: center; border: 1px solid rgb(247, 247, 247);">暂无评论，快来抢沙发吧！</p>
                                        <li v-if="commentslist.length!=0" v-for="(item, index) in commentslist" :key="item.id">
                                            <div class="avatar-box">
                                                <i class="iconfont icon-user-full"></i>
                                            </div>
                                            <div class="inner-box">
                                                <div class="info">
                                                    <span>{{item.user_name}}</span>
                                                    <span>{{item.add_time |cutTime}}</span>
                                                </div>
                                                <p>{{item.content}}</p>
                                            </div>
                                        </li>
                                    </ul>
                                    <Page :total="totalcount" :current='pageIndex' :page-size='pageSize' placement="top" :page-size-opts='[5, 10, 15, 20]' @on-change="page($event)" @on-page-size-change="size($event)" show-elevator show-sizer />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="left-220">
                        <div class="bg-wrap nobg">
                            <div class="sidebar-box">
                                <h4>推荐商品</h4>
                                <ul class="side-img-list">
                                    <li v-for="(item, index) in hotgoodslist" :key="item.id">
                                        <div class="img-box">
                                            <router-link :to="'/goodsdetail/'+item.id">
                                                <img :src="item.img_url">
                                            </router-link>
                                        </div>
                                        <div class="txt-box">
                                            <router-link :to="'/goodsdetail/'+item.id">
                                                {{item.title}}
                                            </router-link>
                                            <span>{{item.add_time |cutTime}}</span>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <BackTop></BackTop>
         <img class="moveImg" v-if="imglist.length!=0" :src="imglist[0].original_path" alt="">
    </div>
</template>
<script>
import ProductZoomer from "vue-product-zoomer";
import $ from "jquery";
export default {
  data: function() {
    return {
      mess: "",
      goodsinfo: {},
      hotgoodslist: [],
      imglist: [],
      isShowintro: true,
      num: 1,
      images: {
        normal_size: []
      },
      zoomerOptions: {
        zoomFactor: 2,
        pane: "container-round",
        hoverDelay: 300,
        namespace: "inline-zoomer",
        move_by_click: true,
        scroll_items: 4,
        choosed_thumb_border_color: "#bbdefb"
      },
      pageIndex: 1,
      pageSize: 5,
      totalcount: 0,
      commentslist: []
    };
  },
  components: {
    ProductZoomer
  },
  methods: {
    render() {
      this.imglist = [];
      this.images.normal_size = [];
      this.axios
        .get(`site/goods/getgoodsinfo/${this.$route.params.id}`)
        .then(response => {
          this.goodsinfo = response.data.message.goodsinfo;
          this.hotgoodslist = response.data.message.hotgoodslist;
          this.imglist = response.data.message.imglist;
          this.imglist.forEach((v, i) => {
            this.images.normal_size.push({
              id: v.id,
              url: v.original_path
            });
          });
          ////console.log(this.images.normal_size)
        })
        .catch(err => {
          ////console.log(err)
        });
    },
    submitcomment() {
      if (this.mess == "") {
        this.$Message.error("你输入的内容为空");
      }
      this.axios
        .post(`site/validate/comment/post/goods/${this.$route.params.id}`, {
          commenttxt: this.mess
        })
        .then(response => {
          this.pageIndex = 1;
          this.getcomment();
          this.mess = "";
        })
        .catch(err => {
          ////console.log(err)
        });
    },
    getcomment() {
      this.axios
        .get(
          `site/comment/getbypage/goods/${this.$route.params.id}?pageIndex=${
            this.pageIndex
          }&pageSize=${this.pageSize}`
        )
        .then(response => {
          //console.log(response)
          this.totalcount = response.data.totalcount;
          this.commentslist = response.data.message;
          //console.log(this.commentslist);
        })
        .catch(err => {
          //console.log(err)
        });
    },
    page(page) {
      //页码改变
      this.pageIndex = page;
      // ////console.log(page)
      this.getcomment();
    },
    size(size) {
      //页容量改变
      this.pageSize = size;
      this.getcomment();
    },
    cartAdd() {
      //console.log(this.$store)
      // console.log(this.imglist)
      console.log($(".add").offset());
      let offset = $("#buyButton .add").offset();
      // 获取购物车的位置
      let cartOffset = $(".icon-cart").offset();
      // // console.log(offset);// top left
      $(".moveImg")
        .show().css(offset)
        .addClass("move")
        .animate(cartOffset, 1000, () => {
          $(".moveImg")
            .removeClass("move")
            .hide();
        });
      this.$store.commit("buygoods", {
        goodId: this.$route.params.id,
        goodNum: parseInt(this.num)
      });
    }
  },
  created() {
    this.render();
    this.getcomment();
  },
  watch: {
    $route(to, from) {
      // 对路由变化作出响应...
      this.render();
    }
  }
};
</script>
<style>
@import url("../../node_modules/font-awesome/css/font-awesome.min.css");

.inline-zoomer-zoomer-box {
  width: 368px;
}
.pic-box .control-box .thumb-list{
    display: flex;
}
.thumb-list img {
  width: 78px;
  height: 78px;
  margin: 5px;
}
.moveImg {
  width: 40px;
  position: absolute;
  top: 0;
  right: 50px;
  display: none;
}
.control i {
  text-align: center;
}
.moveImg.move {
  transform: scale(0.5, 0.5) rotateZ(3600deg);
  opacity: 0.4;
  transition: transform 1s, opacity 1s;
}
</style>
