<!--
 * @description: 
 * @author: 小羽
 * @Date: 2021-02-09 15:12:29
 * @LastEditTime: 2021-02-09 16:07:19
 * @Copyright: 1.0.0
-->
<template>
  <input class="su__input" v-model="text" :placeholder="placeholder"/>
</template>

<script>
export default {
  name:"SuInput",
  props:{
    placeholder:{
      type:String,
      default:"请输入"
    },
    value:null,
    number:{
      type:Boolean,
      default:false
    }
  },
  data(){
    return {
      text:""
    }
  },
  watch:{
    value:{
      handler(newval,oldval){
        this.text = newval
      },
      deep:true,
      immediate:true
    },
    text:{
      handler(newval,oldval){
        this.$emit("input",newval)
      },
      deep:true,
      immediate:true
    }
  }
}
</script>

<style lang="less" scoped>
@primary-color:#707AE4;
.su__input{
  padding: 10px;
  outline-color: @primary-color;
  outline-width: thin;
}
</style>