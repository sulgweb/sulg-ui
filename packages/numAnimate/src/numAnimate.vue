<!--
 * @description: 
 * @author: 小羽
 * @Date: 2021-01-20 11:15:03
 * @LastEditTime: 2021-01-20 11:50:58
 * @Copyright: 1.0.0
-->
<template>
  <span>{{ num }}</span>
</template>
 
<script>
export default {
  name:"SuNumAnimate",
  props: {
    //只需要传递一个金额参数
    amount: {
      type: Number,
      required: true,
    },
    time:{
      type: Number,
      default: 1000
    },
    start:{
      type: Boolean,
      default: true
    },
    thousand:{
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      num: 0,
    };
  },
  methods:{
    thousandFunc(num,status){
      //(num+ '').replace(/(\d{1,3})(?=(\d{3})+(?:$|\.))/g,'$1,');//千分位正则写法
      return status?num.toLocaleString():num
    }
  },
  watch: {
    start:{
      handler(newval,oldval){
        let type = this.amount>0?"add":"sub"
        if(this.amount&&newval){
          let numInit = 0
          let changeNum = this.amount / (this.time / 10)
          let minTime = this.time / this.amount
          let t = setInterval(()=>{
            numInit += changeNum
            if(type==="add"&&numInit>=this.amount){
              clearInterval(t)
              this.num = this.thousandFunc(this.amount,this.thousand)
            }else if(type==="sub"&&numInit<=this.amount){
              clearInterval(t)
              this.num = this.thousandFunc(this.amount,this.thousand)
            }
            else{
              this.num = this.thousandFunc(Math.round(numInit),this.thousand)
            }
          },10)
        }
      },
      deep:true,
      immediate:true
    }
  },
};
</script>