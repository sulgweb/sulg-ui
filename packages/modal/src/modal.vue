<!--
 * @description: 
 * @author: 小羽
 * @Date: 2021-01-20 16:43:50
 * @LastEditTime: 2021-01-21 16:05:59
 * @Copyright: 1.0.0
-->
<template>
  <div class="su-modal" v-if="visable">
    <div class="su-modal__mask" v-if="mask"></div>
    <div class="su-modal__main">
      <slot name="header">
        <div class="su-modal__main-header">
          <div class="su-modal__main-header-left">{{title}}</div>
          <div class="su-modal__main-header-right" v-if="closed" @click="closeFunc">
            <su-icon name="close"></su-icon>
          </div>
        </div>
      </slot>
      <slot>{{content}}</slot>
      <slot name="footer"></slot>
    </div>
  </div>
</template>

<script>
import SuIcon from "../../icon/src/icon"
export default {
  name:"SuModal",
  data(){
    return{
      visable:false
    }
  },
  components:{
    SuIcon,
  },
  props:{
    title:{
      type:String,
      default:""
    },
    value:{
      type:Boolean,
      default:true
    },
    mask:{
      type:Boolean,
      default:true
    },
    closed:{
      type:Boolean,
      default:true
    },
    content:{
      type:String,
      default:""
    },
    onClose:null
  },
  mounted(){
  },
  destroyed(){
  },
  methods:{
    listingModalClick(e){
      if(e.target.closest('su-modal__main')){
        console.log(111)
        this.closeFunc()
      }
    },
    closeFunc(){
      //this.visable = false
      if(typeof this.onClose === "function"){
        this.visable = false
      }else{
        this.$emit("input",false)
      }
    }
  },
  watch:{
    value:{
      handler(newval,oldval){
        this.visable = newval
      },
      immediate:true
    }
  }
}
</script>

<style lang="less" scoped>

</style>