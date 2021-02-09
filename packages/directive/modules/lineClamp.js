/*
 * @description: 
 * @author: 小羽
 * @Date: 2021-02-09 10:06:04
 * @LastEditTime: 2021-02-09 14:13:36
 * @Copyright: 1.0.0
 */
export default {
  suLineClamp:{
    inserted(el,building){
      //el.style.background = 'red';
      el.style["-webkit-line-clamp"] = building.value||1
      el.className += " su-line-clamp"
    }
  }
}