/*
 * @Description: 
 * @Author: 小羽
 * @LastEditors: 小羽
 * @Date: 2021-03-17 22:48:19
 * @LastEditTime: 2021-03-18 00:14:45
 */
export default {
    suReflect:{
      inserted(el,building){
        //el.style.background = 'red';
        //el.style["-webkit-line-clamp"] = building.value||1
        console.log(building)
        if(building.value){
          let {direction,opacity,empty} = building.value
          empty = empty||"0px"
          opacity = opacity||0.3
          direction = direction||"below" 
          el.style["-webkit-box-reflect"] =  `below ${empty} linear-gradient(transparent, rgba(0, 0, 0, ${opacity}))`;
        }
        else{
          el.className += " su-reflect"
        }
      }
    }
  }