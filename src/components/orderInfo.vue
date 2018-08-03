<template>
    <div>
        <div class="section">
            <div class="location">
                <span>当前位置：</span>
                <a href="/index.html">首页</a> &gt;
                <a href="javascript:;">支付中心</a>
            </div>
        </div>

        <div class="section">
            <div class="wrapper">
                <div class="bg-wrap">
                    <div class="nav-tit pay">
                        <a href="javascript:;" class="selected">支付中心</a>
                    </div>
                    <div class="form-box payment">
                        <div class="el-row">
                            <div class="el-col el-col-18">
                                <div class="el-row">
                                    <div class="el-col el-col-12">
                                        <dl class="form-group">
                                            <dt>订 单 号：</dt>
                                            <dd>{{mess.order_no}}</dd>
                                        </dl>
                                    </div>
                                    <div class="el-col el-col-12">
                                        <dl class="form-group">
                                            <dt>收货人姓名：</dt>
                                            <dd>{{mess.accept_name}}</dd>
                                        </dl>
                                    </div>
                                </div>
                                <div class="el-row">
                                    <div class="el-col el-col-12">
                                        <dl class="form-group">
                                            <dt>送货地址：</dt>
                                            <dd>{{mess.area}}
                                            </dd>
                                        </dl>
                                    </div>
                                    <div class="el-col el-col-12">
                                        <dl class="form-group">
                                            <dt>手机号码：</dt>
                                            <dd>{{mess.mobile}}</dd>
                                        </dl>
                                    </div>
                                </div>
                                <div class="el-row">
                                    <div class="el-col el-col-12">
                                        <dl class="form-group">
                                            <dt>支付金额：</dt>
                                            <dd>{{mess.order_amount}}元</dd>
                                        </dl>
                                    </div>
                                    <div class="el-col el-col-12">
                                        <dl class="form-group">
                                            <dt>支付方式：</dt>
                                            <dd>在线支付</dd>
                                        </dl>
                                    </div>
                                </div>
                                <div class="el-row">
                                    <div class="el-col el-col-12">
                                        <dl class="form-group">
                                            <dt>备&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;注：</dt>
                                            <dd>{{mess.message}}</dd>
                                        </dl>
                                    </div>
                                </div>
                            </div>
                            <div class="el-col el-col-6">
                                <VueQrcode v-if="orderurl" :value="orderurl" :options="{ size: 200 }"></VueQrcode>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import VueQrcode from "@xkeshi/vue-qrcode";
export default {
  data: function() {
    return {
      mess: {},
      orderurl: undefined
    };
  },
  created() {
          let timeId = setInterval(() => {
      this.axios
        .get(`site/validate/order/getorder/${this.$route.params.orderid}`)
        .then(response => {
        //   console.log(response);
          this.mess = response.data.message[0];
          if (response.data.message[0].status == 2) {
            this.$Message.success("支付成功");
            clearInterval(timeId); 
            this.$router.push('/paysuccess');
          }
        })
        .catch(err => {
          //console.log(err);
        });
    }, 1000);
    this.axios
      .get(`site/validate/pay/alipay/${this.$route.params.orderid}`)
      .then(response => {
        // console.log(response);
        this.orderurl = response.request.responseURL;
      })
      .catch(err => {
        // console.log(err);
      });

  },
  components: {
    VueQrcode
  }
};
</script>
<style scoped>
</style>
