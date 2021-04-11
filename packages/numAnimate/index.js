/*
 * @description: 
 * @author: 小羽
 * @Date: 2021-01-24 11:14:48
 * @LastEditTime: 2021-01-24 11:21:24
 * @Copyright: 1.0.0
 */
import SuNumAnimate from './src/numAnimate.vue'
 
// 支持按需引用
SuNumAnimate.install = function (Vue) {
  Vue.component(SuNumAnimate.name, SuNumAnimate);
};
 
export default SuNumAnimate;