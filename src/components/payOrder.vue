<template>
    <div>
        <div class="section">
            <div class="location">
                <span>当前位置：</span>
                <a href="/index.html">首页</a> &gt;
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
                                <li class="active">
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
                    <div class="cart-box">
                        <h2 class="slide-tit">
                            <span>1、收货地址</span>
                        </h2>
                        <div id="orderForm" name="orderForm" url="">
                            <!-- <div class="form-box address-info">
                                <dl class="form-group">
                                    <dt>收货人姓名：</dt>
                                    <dd>
                                        <input name="book_id" id="book_id" type="hidden" value="0">
                                        <input name="accept_name" id="accept_name" type="text" class="input" value="" datatype="s2-20" sucmsg=" ">
                                        <span class="Validform_checktip">*收货人姓名</span>
                                    </dd>
                                </dl>
                                <dl class="form-group">
                                    <dt>所属地区：</dt>
                                    <dd>
                                        <select id="province" name="province" class="select">
                                            <option value="">所属省份</option>
                                            <option value="北京市">北京市</option>
                                            <option value="天津市">天津市</option>
                                            <option value="河北省">河北省</option>
                                            <option value="山西省">山西省</option>
                                            <option value="内蒙古自治区">内蒙古自治区</option>
                                            <option value="辽宁省">辽宁省</option>
                                            <option value="吉林省">吉林省</option>
                                            <option value="黑龙江省">黑龙江省</option>
                                            <option value="上海市">上海市</option>
                                            <option value="江苏省">江苏省</option>
                                            <option value="浙江省">浙江省</option>
                                            <option value="安徽省">安徽省</option>
                                            <option value="福建省">福建省</option>
                                            <option value="江西省">江西省</option>
                                            <option value="山东省">山东省</option>
                                            <option value="河南省">河南省</option>
                                            <option value="湖北省">湖北省</option>
                                            <option value="湖南省">湖南省</option>
                                            <option value="广东省">广东省</option>
                                            <option value="广西壮族自治区">广西壮族自治区</option>
                                            <option value="海南省">海南省</option>
                                            <option value="重庆市">重庆市</option>
                                            <option value="四川省">四川省</option>
                                            <option value="贵州省">贵州省</option>
                                            <option value="云南省">云南省</option>
                                            <option value="西藏自治区">西藏自治区</option>
                                            <option value="陕西省">陕西省</option>
                                            <option value="甘肃省">甘肃省</option>
                                            <option value="青海省">青海省</option>
                                            <option value="宁夏回族自治区">宁夏回族自治区</option>
                                            <option value="新疆维吾尔自治区">新疆维吾尔自治区</option>
                                            <option value="香港特别行政区">香港特别行政区</option>
                                            <option value="澳门特别行政区">澳门特别行政区</option>
                                            <option value="台湾省">台湾省</option>
                                            <option value="其它">其它</option>
                                        </select>
                                        <select id="city" name="city" class="select">
                                            <option value="">所属城市</option>
                                        </select>
                                        <select id="area" name="area" class="select" datatype="*" sucmsg=" ">
                                            <option value="">所属地区</option>
                                        </select>
                                        <span class="Validform_checktip">*请选择您所在的地区</span>
                                    </dd>
                                </dl>
                                <dl class="form-group">
                                    <dt>详细地址：</dt>
                                    <dd>
                                        <input name="address" id="address" type="text" class="input" value="" datatype="*2-100" sucmsg=" ">
                                        <span class="Validform_checktip">*除上面所属地区外的详细地址</span>
                                    </dd>
                                </dl>
                                <dl class="form-group">
                                    <dt>手机号码：</dt>
                                    <dd>
                                        <input name="mobile" id="mobile" type="text" class="input" value="" datatype="m" sucmsg=" ">
                                        <span class="Validform_checktip">*收货人的手机号码</span>
                                    </dd>
                                </dl>
                                <dl class="form-group">
                                    <dt>联系电话：</dt>
                                    <dd>
                                        <input name="telphone" id="telphone" type="text" class="input" value="">
                                        <span class="Validform_checktip">收货人的联系电话，非必填</span>
                                    </dd>
                                </dl>
                                <dl class="form-group">
                                    <dt>电子邮箱：</dt>
                                    <dd>
                                        <input name="email" id="email" type="text" class="input" value="">
                                        <span class="Validform_checktip">方便通知订单状态，非必填</span>
                                    </dd>
                                </dl>
                                <dl class="form-group">
                                    <dt>邮政编码：</dt>
                                    <dd>
                                        <input name="post_code" id="post_code" type="txt" class="input code">
                                        <span class="Validform_checktip">所在地区的邮政编码，非必填</span>
                                    </dd>
                                </dl>
                            </div> -->
                            <el-form status-icon :model="orderinfo" :rules="rules" ref="orderinfo" label-width="100px" class="demo-ruleForm">
                                <el-form-item label="收货人姓名" prop="accept_name">
                                    <el-input v-model="orderinfo.accept_name"></el-input>
                                </el-form-item>
                                <el-form-item label="所属地区">
                                    <v-distpicker @selected="selected($event)" :province="orderinfo.area.province.value" :city="orderinfo.area.city.value" :area="orderinfo.area.area.value"></v-distpicker>
                                </el-form-item>
                                <el-form-item label="详细地址" prop="address">
                                    <el-input v-model="orderinfo.address"></el-input>
                                </el-form-item>
                                <el-form-item label="手机号码" prop="mobile">
                                    <el-input v-model="orderinfo.mobile"></el-input>
                                </el-form-item>
                                <el-form-item label="电子邮箱" prop="email">
                                    <el-input v-model="orderinfo.email"></el-input>
                                </el-form-item>
                                <el-form-item label="邮政编码" prop="post_code">
                                    <el-input v-model="orderinfo.post_code"></el-input>
                                </el-form-item>
                            </el-form>
                            <h2 class="slide-tit">
                                <span>2、支付方式</span>
                            </h2>
                            <ul class="item-box clearfix">
                                <!--取得一个DataTable-->
                                <li>
                                    <label>
                                        <el-radio v-model="orderinfo.payment_id" label="6">在线支付</el-radio>
                                        <em>手续费：0.00元</em>
                                    </label>
                                </li>
                            </ul>
                            <h2 class="slide-tit">
                                <span>3、配送方式</span>
                            </h2>
                            <ul class="item-box clearfix">
                                <!--取得一个DataTable-->
                                <li>
                                    <label>
                                        <el-radio-group @change="changeNum($event)" v-model="orderinfo.express_id">
                                            <el-radio label="1">顺丰快递(20元)</el-radio>
                                            <el-radio label="2">圆通快递(10元)</el-radio>
                                            <el-radio label="3">韵达快递(8元)</el-radio>
                                        </el-radio-group>
                                    </label>
                                </li>
                            </ul>
                            <h2 class="slide-tit">
                                <span>4、商品清单</span>
                            </h2>
                            <div class="line15"></div>
                            <table width="100%" border="0" align="center" cellpadding="8" cellspacing="0" class="cart-table">
                                <tbody>
                                    <tr>
                                        <th colspan="2" align="left">商品信息</th>
                                        <th width="84" align="left">单价</th>
                                        <th width="84" align="center">购买数量</th>
                                        <th width="104" align="left">金额(元)</th>
                                    </tr>
                                    <tr v-for="(item, index) in goodlist" :key="item.id">
                                        <td width="68">
                                            <router-link :to="'/goodsdetail/'+item.id">
                                                <img :src="item.img_url" class="img">
                                            </router-link>
                                        </td>
                                        <td>
                                           <router-link :to="'/goodsdetail/'+item.id">{{item.title}}</router-link>
                                        </td>
                                        <td>
                                            <span class="red">
                                                {{item.sell_price}}
                                            </span>
                                        </td>
                                        <td align="center">{{item.buycount}}</td>
                                        <td>
                                            <span class="red">
                                                {{item.sell_price*item.buycount}}
                                            </span>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                            <div class="line15"></div>
                            <h2 class="slide-tit">
                                <span>5、结算信息</span>
                            </h2>
                            <div class="buy-foot clearfix">
                                <div class="left-box">
                                    <dl>
                                        <dt>订单备注(100字符以内)</dt>
                                        <dd>
                                            <textarea v-model="orderinfo.message" name="message" class="input" style="height:35px;"></textarea>
                                        </dd>
                                    </dl>
                                </div>
                                <div class="right-box">
                                    <p>
                                        商品
                                        <label class="price">{{totalnum}}</label> 件&nbsp;&nbsp;&nbsp;&nbsp; 商品金额：￥
                                        <label id="goodsAmount" class="price">{{totalprice}}</label> 元&nbsp;&nbsp;&nbsp;&nbsp;
                                    </p>
                                    <p>
                                        运费：￥
                                        <label id="expressFee" class="price">{{orderinfo.expressMoment}}</label> 元
                                    </p>
                                    <p class="txt-box">
                                        应付总金额：￥
                                        <label id="totalAmount" class="price">{{totalcount}}</label>
                                    </p>
                                    <p class="btn-box">
                                        <a class="btn button" href="/cart.html">返回购物车</a>
                                        <a id="btnSubmit" @click="submitForm('orderinfo')" class="btn submit">确认提交</a>
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
// 导入 省市联动
import VDistpicker from "v-distpicker";
export default {
  data: function() {
    // 自定义的验证规则
    // value 输入的值
    // rule 规则
    // callback 回调
    var validateMobile = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("请输入手机号"));
      } else {
        // 定义正则规则
        let reg = /^(0|86|17951)?(13[0-9]|15[012356789]|166|17[3678]|18[0-9]|14[57])[0-9]{8}$/;
        // 验证
        if (reg.test(value)) {
          // 对
          callback();
        } else {
          // 错
          callback(new Error("请输入正确的手机号"));
        }
      }
    };
    var validateEmail = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("邮箱不能为空"));
      } else {
        // 定义正则规则
        let reg = /\w+([-+.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*/;
        // 验证
        if (reg.test(value)) {
          // 对
          callback();
        } else {
          // 错
          callback(new Error("请输入正确的邮箱地址"));
        }
      }
    };
    var validatePostCode = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("邮编"));
      } else {
        // 定义正则规则
        let reg = /^[1-9]\d{5}(?!\d)$/;
        // 验证
        if (reg.test(value)) {
          // 对
          callback();
        } else {
          // 错
          callback(new Error("请输入正确的邮编"));
        }
      }
    };

    return {
        goodlist:[],
      orderinfo: {
        accept_name: "常威",
        address: "甲岸桥底4号下水道5号床铺下铺",
        mobile: 18888888888,
        email: "alwaysV@github.com",
        post_code: "518000",
        area: {
          province: {
            code: "430000",
            value: "湖南省"
          },
          city: {
            code: "430400",
            value: "衡阳市"
          },
          area: {
            code: "430422",
            value: "衡南县"
          }
        },
        payment_id:'6',
        express_id:"1",
        expressMoment:20,
        goodsids:0,
        goodsAmount:0,
        message:'请赶紧发货',
        cargoodsobj:{}
      },
      rules: {
        accept_name: [
          { required: true, message: "请输入收件人姓名", trigger: "blur" },
          { min: 2, message: "长度在 2 到 10 个字符", trigger: "blur" }
        ],
        address: [
          { required: true, message: "请输入收货地址", trigger: "change" },
          { min: 2, message: "请输入的详细一些哦", trigger: "change" }
        ],
        mobile: [{required: true, validator: validateMobile, trigger: "change" }],
        email: [{ validator: validateEmail, trigger: "change" }],
        post_code: [{ validator: validatePostCode, trigger: "change" }]
      }
    };
  },
  methods:{
    selected(value){
        // ////console.log(value)
        this.orderinfo.area=value;
    },
    changeNum(value){
        // ////console.log(value)
        switch (value) {
            case "1":this.orderinfo.expressMoment=20
            break;
            case "2":this.orderinfo.expressMoment=15
            break;
            case "3":this.orderinfo.expressMoment=8
            break;
        }
    },
    submitForm(formName) {
        this.$refs[formName].validate((valid) => {
          if (valid) {
            // alert('submit!');
            this.axios.post('site/validate/order/setorder',this.orderinfo)
            .then(response=>{
                // ////console.log(response)
                if(response.data.status==0){
                    this.goodlist.forEach((v,i)=>{
                        // ////console.log(v.id)
                        this.$store.commit('delGood',v.id)  
                    })
                  this.$router.push('/orderInfo/'+response.data.message.orderid);  
                }
            }).catch(err=>{
                ////console.log(err)
            })
          } else {
            this.$Message.error('还有选项没填')
            return false;
          }
        });
      }
  },
  created(){
      let ids=this.$route.params.ids;
      this.orderinfo.goodsids=ids;
      this.axios.get(`site/validate/order/getgoodslist/${ids}`)
      .then(response=>{
        //   ////console.log(response)
        response.data.message.forEach(v => {
            v.buycount=this.$store.state.buyList[v.id]
        });
        this.goodlist=response.data.message;
        let temobj={};
        this.goodlist.forEach((v,i)=>{
            temobj[v.id]=v.buycount
        })
        this.orderinfo.cargoodsobj=temobj;
        this.orderinfo.goodsAmount=Number(this.totalprice);
        // console.log(this.orderinfo.goodsAmount);
      }).catch(err=>{
          ////console.log(err);
      })
  },
  computed:{
      totalnum(){
          let num=0;
          this.goodlist.forEach((v,i)=>{
              num+=v.buycount
          })
          return num;
      },
      totalprice(){
          let price=0;
          this.goodlist.forEach((v,i)=>{
              price+=v.buycount*v.sell_price
          })
          return price;
      },
      totalcount(){
          return this.totalprice+this.orderinfo.expressMoment
      }
  },
  // 注册组件
  components: { VDistpicker }
};
</script>

<style scoped>
</style>
