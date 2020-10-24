<template>
    <div :class="['su-button',round?'su-button-round':'',type?'su-button-'+type:'',animation&&type?'su-button-'+type+'-'+animation:'']">
      <slot></slot>
    </div>
</template>
 
<script>
    export default {
      name: 'SuButton',
      props: {
        round:{
          type:Boolean,
          default:false
        },
        type:{
          type:String,
          default:"primary"
        },
        animation:{
          type:String,
          default:"criss-cross"
        },
        bgColor:{
          type:String,
          default:'#707AE4'
        }
      }
    }
</script>
 
<style lang="less" scoped>
@import url('../../style/index.less');
.su-button {
  position: relative;
  display: inline-block;
  padding: 2px 10px;
  &-primary{
    border: 1px solid @primaryColor;
    box-sizing: border-box;
    color: @primaryColor;
    background: @primary-color-rgba;
    overflow: hidden;
    transition: all 1s;
    &:hover{
      color: #fff;
    }
    &-criss-cross {
      position: relative;
      &::before {
        transform: translate(-50%, -50%);
        z-index: -1;
        left: -20px;
        position: absolute;
        top: 50%;
        content: '';
        width: 10px;
        height: 10px;
        background: @primaryColor;
        border-radius: 50%;
      }
      &::after{
        transform: translate(50%, -50%);
        z-index: -1;
        right: -20px;
        position: absolute;
        top: 50%;
        content: '';
        width: 10px;
        height: 10px;
        background: @primaryColor;
        border-radius: 50%;
      }
      &:hover{
        &::after{
          animation: criss-cross-right 0.8s both;
        }
        &::before{
          animation: criss-cross-left 0.8s both;
        }
      }
    }
  }
  
  
  
  &-round{
    border-radius: 32px;
  }
}
@keyframes criss-cross-left {
  0% {
    left: -20px;
  }
  50% {
    left: 50%;
    width: 20px;
    height: 20px;
  }
  100% {
    left: 50%;
    width: 375px;
    height: 375px;
  }
}
@keyframes criss-cross-right {
  0% {
    right: -20px;
  }
  50% {
    right: 50%;
    width: 20px;
    height: 20px;
  }
  100% {
    right: 50%;
    width: 375px;
    height: 375px;
  }
}
</style>