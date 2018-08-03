<template>
    <div>
        <div class="section">
            <div class="location">
                <span>当前位置：</span>
                <router-link to="/index">首页</router-link>&gt;
                <a href="/cart.html">购物车</a>
            </div>
        </div>

        <div class="section">
            <div class="wrapper">
                <div class="bg-wrap">
                    <!--购物车头部-->
                    <div class="cart-head clearfix">
                        <h2>
                            <i class="iconfont icon-cart"></i>我的购物车</h2>
                        <div class="cart-setp">
                            <ul>
                                <li class="first active">
                                    <div class="progress">
                                        <span>1</span>
                                        放进购物车
                                    </div>
                                </li>
                                <li>
                                    <div class="progress">
                                        <span>2</span>
                                        填写订单信息
                                    </div>
                                </li>
                                <li class="last">
                                    <div class="progress">
                                        <span>3</span>
                                        支付/确认订单
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <!--购物车头部-->
                    <!--商品列表-->
                    <div class="cart-box">
                        <input id="jsondata" name="jsondata" type="hidden">
                        <table width="100%" align="center" class="cart-table" border="0" cellspacing="0" cellpadding="8">
                            <tbody>
                                <tr>
                                    <th width="48" align="center">
                                        <a>选择</a>
                                    </th>
                                    <th align="left" colspan="2">商品信息</th>
                                    <th width="84" align="left">单价</th>
                                    <th width="104" align="center">数量</th>
                                    <th width="104" align="left">金额(元)</th>
                                    <th width="54" align="center">操作</th>
                                </tr>
                                <tr v-for="(item, index) in message" :key="item.id">
                                    <td width="48" align="center">
                                        <el-switch v-model="item.is_selected"  active-color="#409eff" inactive-color="#555555">
                                        </el-switch>
                                    </td>
                                    <td align="left" colspan="2">
                                        <div class="shopInfo"><img :src="item.img_url" alt="" style="width: 50px; height: 50px; margin-right: 10px;">
                                            <span>{{item.title}}</span>
                                        </div>
                                    </td>
                                    <td width="84" align="left">{{item.sell_price}}</td>
                                    <td width="104" align="center">
                                        <el-input-number @change="changeNum($event,index)" v-model="item.buycount" size="mini" :min="1" :max="10" label="描述文字"></el-input-number>
                                    </td>
                                    <td width="104" align="left">{{item.sell_price*item.buycount}}</td>
                                    <td width="54" align="center">
                                        <a @click="del(index)" href="javascript:void(0)">删除</a>
                                    </td>
                                </tr>
                                <tr v-if="message.length==0">
                                    <td colspan="10">
                                        <div class="msg-tips">
                                            <div class="icon warning">
                                                <i class="iconfont icon-tip"></i>
                                            </div>
                                            <div class="info">
                                                <strong>购物车没有商品！</strong>
                                                <p>您的购物车为空，
                                                    <a href="/index.html">马上去购物</a>吧！</p>
                                            </div>
                                        </div>
                                    </td>
                                </tr>
                                <tr>
                                    <th align="right" colspan="8">
                                        已选择商品
                                        <b class="red" id="totalQuantity">{{totalNum}}</b> 件 &nbsp;&nbsp;&nbsp; 商品总金额（不含运费）：
                                        <span class="red">￥</span>
                                        <b class="red" id="totalAmount">{{totalCount}}</b>元
                                    </th>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    <!--/商品列表-->
                    <!--购物车底部-->
                    <div class="cart-foot clearfix">
                        <div class="right-box">
                            <router-link to="/index">
                                <button class="button">继续购物</button>
                            </router-link>
                            <a @click="payment">
                                <button class="submit">立即结算</button>
                            </a>
                        </div>
                    </div>
                    <!--购物车底部-->
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
  data: function() {
    return {
      message: []
    };
  },
  methods: {
    render() {
      // ////console.log(this.$store.state.buyList);
      let buyList = this.$store.state.buyList;
      let ids = "";
      for (const key in buyList) {
        ids += key;
        ids += ",";
      }
      if (ids == "") {
        this.$Spin.hide();
        return;
    }
      ids = ids.slice(0, -1);
      this.axios(`site/comment/getshopcargoods/${ids}`)
        .then(response => {
          // ////console.log(response)
          response.data.message.forEach((v, i) => {
            v.buycount = buyList[v.id];
            v.is_selected = true;
          });
          this.message = response.data.message;
          setTimeout(() => {
          this.$Spin.hide();
        }, 500);
        })
        .catch(err => {
          ////console.log(err);
        });
    },
    changeNum(value, index) {
      this.$store.commit("changebuycoutById", {
        goodId: this.message[index].id,
        buycount: value
      });
    },
    del(index) {
      this.$confirm("此操作将永久删除该文件, 是否继续?", "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning"
      })
        .then(() => {
          this.$message({
            type: "success",
            message: "删除成功!"
          });
            this.$store.commit("delGood", this.message[index].id);
            this.message.splice(index, 1);
            // ////console.log(this.message)
        })
        .catch(() => {
          this.$message({
            type: "info",
            message: "已取消删除"
          });
        });
    },
    payment(){
        let ids='';
        let buyList=this.message
        buyList.forEach((v,i)=>{
            if(v.is_selected){
                ids+=v.id;
                ids+=","
            }
        })
        if(ids==''){
            this.$Message.error('你没有选择商品支付')
            return
        }
        ids=ids.slice(0,-1);
        this.$router.push('/payorder/'+ids)
    }
  },
  computed: {
    totalNum() {
      let num = 0;
      this.message.forEach((v, i) => {
        if (v.is_selected) {
          num += v.buycount;
        }
      });
      return num;
    },
    totalCount() {
      let price = 0;
      this.message.forEach((v, i) => {
        if (v.is_selected) {
          price += v.buycount * v.sell_price;
        }
      });
      return price;
    }
  },
  created() {
    this.$Spin.show();
    this.render();
  }
};
</script>
<style scoped>
</style>