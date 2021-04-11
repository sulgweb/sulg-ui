/*
 * @description: 
 * @author: 小羽
 * @Date: 2021-02-10 15:06:13
 * @LastEditTime: 2021-02-10 15:15:46
 * @Copyright: 1.0.0
 */
import SuInput from './src/input.vue'
 
// 支持按需引用
SuInput.install = function (Vue) {
  Vue.component(SuInput.name, SuInput);
};
 
export default SuInput;