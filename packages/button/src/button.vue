<template>
    <div :class="[
      'su-button',round?'su-button-round':'',
      type?'su-button-'+type:'',
      animation&&type?'su-button-'+type+'-'+animation:'',
      bgColor&&type?'su-button-'+type+'-bg':''
    ]" @click="$emit('click')">
      <i :class="['sulg-icon-'+icon]" style="font-size: 1.5em;margin-right:5px;vertical-align:middle;" v-if="icon"></i>
      <span :style="icon?'vertical-align:middle':''">
        <slot></slot>
      </span>
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
          default:"default"
        },
        bgColor:{
          type:Boolean,
          default:false
        },
        icon:{
          type: String,
          default: ''
        }
      }
    }
</script>
 

// <style lang="less" scoped>
// //@import url('../../style/index.less');
// @typeList:primary,error,warning,success,default,info;
// @typeColorList:#707AE4,#ed4014,#ff9900,#19be6b,#2d8cf0,#2db7f5;
// @typeColorBgList:rgba(165, 168, 225, 0.16),rgba(237,64,20, 0.16),rgba(255,153,0, 0.16),rgba(25,190,107, 0.16),rgba(45,140,240, 0.16),rgba(45,183,245,0.16);
// //@primaryColor:#707AE4;
// //@primary-color-rgba:rgba(165, 168, 225, 0.16);
// .su-button{
//   position: relative;
//   display: inline-block;
//   padding: 2px 12px;
//   min-width: 60px;
//   min-height: 30px;
//   text-align: center;
//   overflow: hidden;
//   box-sizing: border-box;
//   font-size: 16px;
//   outline: none;
//   white-space: nowrap;
//   text-rendering: auto;
//   //width: 100%;
//   z-index: 1;
//   cursor: pointer;
// }
// .su-button(@typeName,@typeColor,@typeColorBg) {
//   .su-button{
//     &-@{typeName}{
//       border: 1px solid @typeColor;
//       box-sizing: border-box;
//       color: @typeColor;
//       overflow: hidden;
//       &-bg{
//         background: @typeColorBg;
//       }
//       &-default{
//         transition: 0.3s;
//         &:hover{
//           background: fade(@typeColorBg,30%);
//         }
//       }
//       &-round-fade-all{
//         position: relative;
//         transition: 0.5s;
//         &::before{
//           transition: 0.8s;
//           width: 0;
//           height: 0;
//           position: absolute;
//           z-index: -1;
//           content: "";
//           left: 50%;
//           top: 50%;
//           background: @typeColor;
//           border-radius: 50%;
//           transform: translate(-50%,-50%);
//         }
//         &:hover{
//           color: #fff;
//           &::before{
//             width: 300px;
//             height: 300px;
//           }
//         }
//       }
//       &-round-fade-half{
//         position: relative;
//         transition: 0.5s;
//         &::before{
//           transition: 0.8s;
//           width: 0;
//           height: 0;
//           position: absolute;
//           z-index: -1;
//           content: "";
//           left: 50%;
//           top: 50%;
//           background: fade(@typeColorBg,45%);;
//           border-radius: 50%;
//           transform: translate(-50%,-50%);
//         }
//         &:hover{
//           color: #fff;
//           &::before{
//             width: 300px;
//             height: 300px;
//           }
//         }
//       }
//       &-criss-cross {
//         position: relative;
//         transition: all 0.5s;
//         &::before {
//           transform: translate(-50%, -50%);
//           z-index: -1;
//           left: -20px;
//           position: absolute;
//           top: 50%;
//           content: '';
//           width: 10px;
//           height: 10px;
//           background: @typeColor;
//           border-radius: 50%;
//         }
//         &::after{
//           transform: translate(50%, -50%);
//           z-index: -1;
//           right: -20px;
//           position: absolute;
//           top: 50%;
//           content: '';
//           width: 10px;
//           height: 10px;
//           background: @typeColor;
//           border-radius: 50%;
//         }
//         &:hover{
//           color: #fff;
//           &::after{
//             animation: criss-cross-right 0.8s both;
//           }
//           &::before{
//             animation: criss-cross-left 0.8s both;
//           }
//         }
//       }
//       &-swipe-left{
//         position: relative;
//         transition: 0.5s;
//         &::before{
//           z-index: -1;
//           transition: 0.5s;
//           content: '';
//           position: absolute;
//           top: 0;
//           left: 0;
//           width: 0;
//           height: 100%;
//           background: @typeColor;
//         }
//         &:hover{
//           color: #fff;
//           &::before{
//             width: 100%;
//           }
//         }
//       }
//       &-swipe-right{
//         position: relative;
//         transition: 0.5s;
//         &::after{
//           z-index: -1;
//           transition: 0.5s;
//           content: '';
//           position: absolute;
//           top: 0;
//           //left: 0;
//           right: 0;
//           width: 0;
//           height: 100%;
//           background: @typeColor;
//         }
//         &:hover{
//           color: #fff;
//           &::after{
//             width: 100%;
//           }
//         }
//       }
//       &-swipe-top{
//         position: relative;
//         transition: 0.5s;
//         &::before{
//           z-index: -1;
//           transition: 0.5s;
//           content: '';
//           position: absolute;
//           top: 0;
//           //left: 0;
//           right: 0;
//           width: 100%;
//           height: 0;
//           background: @typeColor;
//         }
//         &:hover{
//           color: #fff;
//           &::before{
//             height: 100%;
//           }
//         }
//       }
//       &-swipe-bottom{
//         position: relative;
//         transition: 0.5s;
//         &::before{
//           z-index: -1;
//           transition: 0.5s;
//           content: '';
//           position: absolute;
//           bottom: 0;
//           //left: 0;
//           right: 0;
//           width: 100%;
//           height: 0;
//           background: @typeColor;
//         }
//         &:hover{
//           color: #fff;
//           &::before{
//             height: 100%;
//           }
//         }
//       }
//       &-expend-vertical{
//         position: relative;
//         transition: 0.5s;
//         box-sizing: border-box;
//         &::after{
//           transition: 0.5s;
//           content: "";
//           position: absolute;
//           width: 100%;
//           height: 0;
//           z-index: -1;
//           left: 50%;
//           top: 50%;
//           background: @typeColor;
//           transform: translateX(-50%) translateY(-50%);
//         }
//         &:hover{
//           color: #fff;
//           &::after{
//             height: 100%;
//           }
//         }
//       }
//       &-expend-horison{
//         position: relative;
//         transition: 0.5s;
//         box-sizing: border-box;
//         &::after{
//           transition: 0.5s;
//           content: "";
//           position: absolute;
//           width: 0;
//           height: 100%;
//           z-index: -1;
//           left: 50%;
//           top: 50%;
//           background: @typeColor;
//           transform: translateX(-50%) translateY(-50%);
//         }
//         &:hover{
//           color: #fff;
//           &::after{
//             width: 100%;
//           }
//         }
//       }
//       &-expend-tend-right{
//         position: relative;
//         transition: 0.5s;
//         box-sizing: border-box;
//         &::after{
//           transition: 0.5s;
//           content: "";
//           position: absolute;
//           width: 0;
//           height: 600%;
//           z-index: -1;
//           left: 50%;
//           top: 50%;
//           background: @typeColor;
//           transform: translateX(-50%) translateY(-50%) rotate(25deg);
//         }
//         &:hover{
//           color: #fff;
//           &::after{
//             width: 100%;
//           }
//         }
//       }
//       &-expend-tend-left{
//         position: relative;
//         transition: 0.5s;
//         box-sizing: border-box;
//         &::after{
//           transition: 0.5s;
//           content: "";
//           position: absolute;
//           width: 0;
//           height: 600%;
//           z-index: -1;
//           left: 50%;
//           top: 50%;
//           background: @typeColor;
//           transform: translateX(-50%) translateY(-50%) rotate(-25deg);
//         }
//         &:hover{
//           color: #fff;
//           &::after{
//             width: 100%;
//           }
//         }
//       }
//     }
//     &-round{
//       border-radius: 50px;
//     }
//   }
// }

// .loop(@i) when (@i < length(@typeList)+1){
//     .su-button(extract(@typeList, @i),extract(@typeColorList, @i),extract(@typeColorBgList,@i));
//     .loop(@i+1);
// }
// .loop(1);
// @keyframes criss-cross-left {
//   0% {
//     left: -20px;
//   }
//   50% {
//     left: 50%;
//     width: 20px;
//     height: 20px;
//   }
//   100% {
//     left: 50%;
//     width: 375px;
//     height: 375px;
//   }
// }
// @keyframes criss-cross-right {
//   0% {
//     right: -20px;
//   }
//   50% {
//     right: 50%;
//     width: 20px;
//     height: 20px;
//   }
//   100% {
//     right: 50%;
//     width: 375px;
//     height: 375px;
//   }
// }
// </style>